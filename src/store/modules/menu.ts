import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    cacheList: [] as string[], //缓存路由列表
    menuList: [], //菜单列表
    dynamicRouteList: [], //动态路由
    permissionMenu: '/', //有权限的第一个菜单
  }),
  getters: {},
  actions: {
    // 保存登录用户的菜单列表
    setMenuList(menuList: any) {
      this.menuList = menuList
    },

    // 保存用户第一个权限菜单
    setPermissionMenu(menuPath = '/') {
      this.permissionMenu = menuPath
    },

    // 保存动态路由
    setDynamicRouteList(dynamicRouteList: any) {
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
      // setTimeout(() => {
      //   this.cacheList = cacheList
      // }, 100)
      this.cacheList = cacheList
    },
  },
})
