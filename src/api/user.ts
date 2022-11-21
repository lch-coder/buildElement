import { get } from '@/axios/request'

export const loginApi = (params = {}) => {
  return get('/api/user/login', params)
}
