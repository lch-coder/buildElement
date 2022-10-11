import { exportJsonToExcel } from './exportToExcel'
import { IColumn, IConfig } from './type'

export const formatJson = (filterVal: string[], jsonData: any) => {
  return jsonData.map((v: any) => filterVal.map((j: string) => v[j]))
}

let currentCellIndex = 0

//转换数字到EXCEL单元格编号
function encode(n: number) {
  let s = ''
  while (n > 0) {
    let m = n % 26
    if (m === 0) m = 26
    s = String.fromCharCode(m + 64) + s
    n = (n - m) / 26
  }
  return s
}

// 获取跨列
function getColSpan(column: IColumn) {
  let colspan = 0
  const children = column.children || []
  for (let i = 0; i < children.length; i++) {
    const item = children[i]
    if (item.children && item.children.length > 0) {
      colspan += getColSpan(item)
    } else {
      colspan += 1
    }
  }
  if (colspan === 0) {
    colspan = 1
  }
  return colspan
}

// 获取跨行
function getRowSpan(column: IColumn, maxLevel: number) {
  let rowspan = 1
  if (!column.children || column.children.length === 0) {
    rowspan = maxLevel - column.level! + 1
  }
  return rowspan
}

// 设置表头单元格起始编码、索引
function setCellCode(columns: IColumn[], parentNode?: IColumn) {
  columns.forEach((li, index) => {
    if (!currentCellIndex) {
      currentCellIndex = 1
    } else {
      currentCellIndex++
    }
    if (parentNode && index === 0) {
      currentCellIndex = parentNode.cellIndex!
    }
    li.cellIndex = currentCellIndex
    li.cellCode = encode(currentCellIndex)
    const children = li.children
    if (children && children.length > 0) {
      setCellCode(children, li)
    }
  })
}

// 获取最大层级
function getLevels(columns: IColumn[], parentNode?: IColumn) {
  const levels: number[] = []
  columns.forEach(li => {
    li.level = parentNode ? parentNode.level! + 1 : 0
    levels.push(li.level)
    const children = li.children
    if (children && children.length > 0) {
      const result = getLevels(children, li)
      levels.push(...result)
    }
  })
  return levels
}

// 设置合并
function setMerges(columns: IColumn[] = [], maxLevel: number, multiHeader: string[][] = [], merges: string[] = []) {
  columns.forEach(li => {
    const level = li.level! + 1
    const cellIndex = li.cellIndex! - 1
    const cellCode = li.cellCode
    const cellTitle = li.label
    const colSpan = getColSpan(li)
    const rowSpan = getRowSpan(li, maxLevel)

    li.colSpan = colSpan
    li.rowSpan = rowSpan
    if (!multiHeader[level - 1]) {
      multiHeader[level - 1] = []
    }
    if (rowSpan > 1) {
      merges.push(`${cellCode}${level}:${cellCode}${level + rowSpan - 1}`)
      multiHeader[level - 1][cellIndex] = cellTitle
      for (let i = 1; i < rowSpan; i++) {
        if (!multiHeader[level - 1 + i]) {
          multiHeader[level - 1 + i] = []
        }
        multiHeader[level - 1 + i][cellIndex] = ''
      }
    } else {
      multiHeader[level - 1][cellIndex] = cellTitle
    }
    if (colSpan > 1) {
      let endCellIndex = cellIndex + 1
      const emptyCell = []
      for (let i = 1; i < colSpan; i++) {
        endCellIndex++
        emptyCell.push('')
      }
      const endCellCode = encode(endCellIndex)
      multiHeader[level - 1].splice(cellIndex + 1, 0, ...emptyCell)
      merges.push(`${cellCode}${level}:${endCellCode}${level}`)
    }
    const children = li.children
    if (children && children.length > 0) {
      setMerges(children, maxLevel, multiHeader, merges)
    }
  })
}

// 获取表头prop
function getAllProp(columns: IColumn[]) {
  const result: string[] = []
  function getProp(columns: IColumn[]) {
    columns.forEach(item => {
      if (!item.children) {
        result.push(item.prop)
      } else {
        getProp(item.children)
      }
    })
  }
  getProp(columns)
  return result
}

/**
 * 文件导出
 * @param tableData {Array} 数据源
 * @param columns {Array} 列
 * @param config {Object} 配置项
 */
export function exportToExcel(tableData: any, columns: IColumn[], config?: IConfig) {
  let multiHeader: string[][] = []
  const header: string[] = []
  const merges: string[] = []
  currentCellIndex = 0
  columns = JSON.parse(JSON.stringify(columns))
  // 生成单元格所在编码、索引
  setCellCode(columns)
  // 最大层级集合
  const allLevels = getLevels(columns)
  // 获取最大层级
  const maxLevel = Math.max(...allLevels)
  // 生成merges
  setMerges(columns, maxLevel, multiHeader, merges)
  // 获取表头prop
  const filterVal = getAllProp(columns)
  // 行转列
  const data = formatJson(filterVal, tableData)
  exportJsonToExcel({
    multiHeader,
    header,
    merges,
    data,
    ...config,
  })
}
