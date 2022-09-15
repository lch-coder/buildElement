import dayjs, { Dayjs } from 'dayjs'

/**
 * 格式化时间
 * @param date 时间
 * @param formatStr 格式化
 * @returns
 */
export const formatDate = (
  date?: string | number | Date | Dayjs | null | undefined,
  formatStr = 'YYYY-MM-DD HH:mm:ss'
) => {
  return dayjs(date).format(formatStr)
}

export default dayjs
