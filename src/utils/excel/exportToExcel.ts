import { saveAs } from 'file-saver'
import { WorkBook, WorkSheet } from 'xlsx'
import { utils, SSF, write } from 'xlsx-style-hzx'
import { IExcelConfig } from './type'

interface CellInterface {
  v: Date | number | boolean | string
  t: string
  z: string
  s: any
}

class Workbook implements WorkBook {
  SheetNames: string[] = []
  Sheets: { [sheet: string]: WorkSheet } = {}
}

const generateArray = (table: HTMLElement) => {
  const out = []
  const rows = table.querySelectorAll('tr')
  const ranges = []
  for (let R = 0; R < rows.length; ++R) {
    const outRow = []
    const row = rows[R]
    let columns = row.querySelectorAll('th')
    columns.length === 0 && (columns = row.querySelectorAll('td'))
    for (let C = 0; C < columns.length; ++C) {
      const cell = columns[C]
      const colspanStr = cell.getAttribute('colspan')
      const rowspanStr = cell.getAttribute('rowspan')
      let colspan
      let rowspan
      if (colspanStr) {
        colspan = parseInt(colspanStr)
      }
      if (rowspanStr) {
        rowspan = parseInt(rowspanStr)
      }
      const cellValue = cell.innerText
      // Skip ranges
      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (let i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null)
        }
      })
      // Handle Row Span
      if (rowspan || colspan) {
        rowspan = rowspan || 1
        colspan = colspan || 1
        ranges.push({
          s: {
            r: R,
            c: outRow.length,
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1,
          },
        })
      }
      // Handle Value
      outRow.push(cellValue !== '' ? cellValue : null)
      // Handle Colspan
      if (colspan) {
        for (let k = 0; k < colspan - 1; ++k) {
          outRow.push(null)
        }
      }
    }
    out.push(outRow)
  }
  return [out, ranges]
}

const datenum = (date: Date) => {
  return (+date - +new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}

const sheetFromDataArray = (data: any, headerRows = 1) => {
  const ws: { [key: string]: any } = {}
  const range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  }
  for (let R = 0; R !== data.length; ++R) {
    for (let C = 0; C !== data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      const cell: CellInterface = {
        v: data[R][C],
        t: '',
        z: '',
        s: {
          font: { name: '宋体', sz: 11, color: { auto: 1 } },
          alignment: {
            /// 自动换行
            wrapText: 1,
            // 居中
            horizontal: 'center',
            vertical: 'center',
            indent: 0,
          },
        },
      }
      if (cell.v == null) continue
      // 头部列表加边框
      if (R < headerRows) {
        cell.s.border = {
          top: { style: 'thin', color: { rgb: 'ebeef5' } },
          left: { style: 'thin', color: { rgb: 'ebeef5' } },
          bottom: { style: 'thin', color: { rgb: 'ebeef5' } },
          right: { style: 'thin', color: { rgb: 'ebeef5' } },
        }
        cell.s.fill = {
          patternType: 'solid',
          fgColor: { theme: 3, tint: 0.3999755851924192, rgb: 'ddd9c4' },
          bgColor: { theme: 7, tint: 0.3999755851924192, rgb: 'f5f7fa' },
        }
      }
      const cellRef = utils.encode_cell({
        c: C,
        r: R,
      })
      if (typeof cell.v === 'number') cell.t = 'n'
      else if (typeof cell.v === 'boolean') cell.t = 'b'
      else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.z = SSF.get_table()[14]
        cell.v = datenum(cell.v)
      } else cell.t = 's'
      ws[cellRef] = cell
    }
  }
  if (range.s.c < 10000000) {
    ws['!ref'] = utils.encode_range(range)
  }
  return ws
}

const s2ab = (s: string) => {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buf
}

export const exportTableToExcel = (id: string, filename: string) => {
  const theTable = document.getElementById(id)
  if (theTable) {
    const oo = generateArray(theTable)
    const ranges = oo[1]

    /* original data */
    const data = oo[0]
    const wsName = 'SheetJS'

    const wb = new Workbook()
    const ws = sheetFromDataArray(data)

    /* add ranges to worksheet */
    // ws['!cols'] = ['apple', 'banan']
    ws['!merges'] = ranges

    /* add worksheet to workbook */
    wb.SheetNames.push(wsName)
    wb.Sheets[wsName] = ws

    const wbout = write(wb, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary',
    })

    saveAs(
      new Blob([s2ab(wbout)], {
        type: 'application/octet-stream',
      }),
      filename + '.xlsx'
    )
  }
}

export const exportJsonToExcel = ({
  multiHeader = [],
  header,
  data,
  filename = 'excel-list',
  merges = [],
  autoWidth = true,
  bookType = 'xlsx',
}: IExcelConfig) => {
  data = [...data]
  let headerRows = 1
  if (multiHeader && multiHeader.length > 0) {
    headerRows = multiHeader.length
    for (let i = multiHeader.length - 1; i > -1; i--) {
      data.unshift(multiHeader[i])
    }
  } else {
    data.unshift(header)
  }
  const wsName = 'SheetJS'
  const wb = new Workbook()
  const ws = sheetFromDataArray(data, headerRows)

  if (merges.length > 0) {
    if (!ws['!merges']) {
      ws['!merges'] = []
    }
    merges.forEach(item => {
      ws['!merges'].push(utils.decode_range(item))
    })
  }
  if (autoWidth) {
    // 设置worksheet每列的最大宽度
    const colWidth = data.map((row: any) =>
      row.map((val: any) => {
        // 先判断是否为 null/undefined
        if (val == null) {
          return {
            wch: 10,
          }
          // 再判断是否为中文
        } else if (val.toString().charCodeAt(0) > 255) {
          return {
            wch: val.toString().length * 2,
          }
        } else {
          return {
            wch: val.toString().length,
          }
        }
      })
    )
    // 以第一行为初始值
    const result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j].wch < colWidth[i][j].wch) {
          // result[j].wch = colWidth[i][j].wch
          result[j].wch = colWidth[i][j].wch <= 100 ? colWidth[i][j].wch : 100
        }
      }
    }
    ws['!cols'] = result
  }

  // Add worksheet to workbook
  wb.SheetNames.push(wsName)
  wb.Sheets[wsName] = ws

  const wbout = write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary',
  })

  saveAs(
    new Blob([s2ab(wbout)], {
      type: 'application/octet-stream',
    }),
    `${filename}.${bookType}`
  )
}
