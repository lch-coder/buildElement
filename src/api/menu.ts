import { get } from '@/axios/request'

export const getMenuListApi = (params = {}) => {
  return get('/api/getUserMenu', params)
}
