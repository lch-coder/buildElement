import UAParser from 'ua-parser-js'

/** 获取设备信息 */
export function getDeviceInfo() {
  const parser = new UAParser()
  const result = parser.getResult()
  return result
}
