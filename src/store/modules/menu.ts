import { Imenu, IRoute } from '@/typings'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'

interface Menustate {
  /** 存路由列表 */
  cacheList: string[]
  /** 菜单列表 */
  menuList: Imenu[]
  /** 动态路由 */
  dynamicRouteList: IRoute[]
  /** 有权限的第一个菜单 */
  permissionMenu: string
}

export const useMenuStore = defineStore({
  id: 'menu',
  state: (): Menustate => ({
    cacheList: [],
    menuList: [],
    dynamicRouteList: [],
    permissionMenu: '/',
  }),
  getters: {},
  actions: {
    // 保存登录用户的菜单列表
    setMenuList(menuList: Imenu[]) {
      this.menuList = menuList
    },

    // 保存用户第一个权限菜单
    setPermissionMenu(menuPath = '/') {
      this.permissionMenu = menuPath
    },

    // 保存动态路由
    setDynamicRouteList(dynamicRouteList: IRoute[]) {
      this.dynamicRouteList = dynamicRouteList
    },

    // 设置路由缓存
    setCache(cacheList: string[]) {
      this.cacheList = cacheList
    },

    // 清除路由缓存
    clearCache() {
      this.cacheList = []
    },

    // 刷新路由缓存
    async resetCache(routeItem?: string) {
      const cacheList = cloneDeep(this.cacheList)
      if (routeItem) {
        this.cacheList = cacheList.filter((item: string) => item !== routeItem)
      } else {
        this.cacheList = []
      }
      await nextTick()
      this.cacheList = cacheList
    },
  },
})
