import instance from './index'
import { AxiosResponse } from 'axios'
import { FetchOptions } from './types'
import qs from 'qs'

const DEFAULT_OPTIONS: FetchOptions = {
  checkDouble: false,
  needToken: true,
  loading: false,
  handleError: true,
  enableCatchNetworkError: true,
  disabledCheckLogout: false,
  jsonType: true,
  isNQS: true,
  headers: {},
}

// Get
export const get = async (url: string, params: object, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs }
  // 请求参数拼接到url
  if (Object.keys(params).length !== 0) url = `${url}?${qs.stringify(params)}`
  return await instance.get(url, { ...configs }).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}

// post
export const post = async (url: string, params: object, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs }
  return await instance.post(url, params, configs).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}

// delete 默认请求参数放到请求体,若要拼接到url,将data替换成params即可
export const deleteAxios = async (url: string, params: object, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs, data: { ...params } }
  return await instance.delete(url, { ...configs }).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}
