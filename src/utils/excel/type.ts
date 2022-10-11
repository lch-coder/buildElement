export interface IColumn {
  // 属性值
  prop: string
  // 属性名称
  label: string
  // 行索引
  rowSpan?: number
  // 列索引
  colSpan?: number
  // 单元格字母
  cellCode?: string
  // 单元格索引
  cellIndex?: number
  // 层级
  level?: number
  // 子节点
  children?: IColumn[]
}

export interface IConfig {
  filename?: string
  autoWidth?: boolean
  bookType?: string
}

export interface IExcelConfig extends IConfig {
  multiHeader: string[][]
  header: string[]
  data: any
  merges: string[]
}
