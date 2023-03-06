import axios from 'axios'
import { CustomRequestConfig, CustomResponse } from './types'

// import { getLocalStorage } from '@/utils/storage'

/**
 * 错误提示框
 * @param {string} msg 提示的内容
 * @param {number} duration 错误显示时间，默认 3s
 */
const tip = (msg: string, duration = 3000): void => {
  ElMessage.closeAll()
  ElMessage({
    showClose: true,
    message: msg,
    duration,
    type: 'error',
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {number} status 请求失败的状态码
 * @param {any} other 错误信息
 */
const errorHandle = (status: number, other: any) => {
  // 状态码判断
  switch (status) {
    case 500:
      tip('系统更新重启中........')
      break
    // 401：未登录状态，可跳转登录页
    case 401:
      tip('未登录！')
      break
    case 403:
      // 403：登录过期，可处理清空缓存
      tip('登录过期，请重新登录！')
      break
    case 404:
      tip('请求的资源不存在！')
      break
    case 415:
      tip('请求参数格式错误！')
      break
    case 302:
      // toLogin()
      localStorage.clear()
      tip('未登录或登录失效或账号存在重复使用，请重新登录！')
      break
    default:
      if (typeof other === 'string') tip(other)
  }
}

/**
 * loading加载
 * @param config loading配置项
 */
let loading: any // 全局loading，避免show->hidden重复抖动
let requestCount: number = 0 // 正在请求的数量
const showLoading = (config: { text: string }) => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service(config)
  }
  requestCount++
}
const hideLoading = (): void => {
  requestCount--
  if (requestCount === 0) {
    loading.close()
    loading = null
  }
}

// 创建axios的一个实例
const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_URL, // proxy已配置
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 60 * 10000, //  请求超时时长
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
})

// 请求拦截器
instance.interceptors.request.use(
  (config: CustomRequestConfig) => {
    // 在发送请求前需要做的事
    // if (config.needToken) {
    //   const { token } = getLocalStorage('userInfos')
    //   config.headers = {
    //     token
    //     // pkgTime, // 发版时间,需引入pkg插件
    //   }
    // }
    if (config.loading) showLoading({ text: '疯狂加载中...' })
    return config
  },
  async (error: any) => await Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  async (res: CustomResponse) => {
    if (res.config.loading) hideLoading()
    // 成功返回时需要做的处理
    return res.status === 200 ? await Promise.resolve(res) : await Promise.reject(res)
  },
  (error: any) => {
    // 对报错进行处理
    const { response } = error
    if (response.config.loading) hideLoading()
    // 输出错误信息
    response && errorHandle(response.status, response.data.message || response.data.msg)
  }
)

export default instance
