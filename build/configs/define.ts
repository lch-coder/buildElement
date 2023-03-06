import dayjs from 'dayjs'

/** 项目构建时间 */
const __PKG_TIME__ = JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'))

export const viteDefine = {
  __PKG_TIME__,
}
