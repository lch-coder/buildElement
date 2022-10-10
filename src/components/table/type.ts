export interface IColumn {
  prop: string
  label: string
  slot?: string
  width?: string | number
  minWidth?: string | number
  sortable?: boolean | string
  fixed: string | boolean
  headerSlot?: string
  children?: IColumn[]
}
