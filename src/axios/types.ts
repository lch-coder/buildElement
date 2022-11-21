import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface FetchOptions extends AxiosRequestConfig {
  checkDouble?: boolean // 是否需要校验重复接口
  needToken?: boolean // 是否需要判断token
  loading?: boolean // 是否需要加入默认loading
  handleError?: boolean // 是否需要自定义error
  jsonType?: boolean // 是否启用json格式的传输
  isNQS?: boolean // 一般在启用json格式时使用
  enableCatchNetworkError?: boolean // 是否启用默认拦截异常请求
  disabledCheckLogout?: boolean // 是否禁用校验登录过期，true - 禁用 false - 不禁用
}

export type CustomRequestConfig = FetchOptions
export interface CustomResponse extends AxiosResponse<any> {
  config: FetchOptions
}
