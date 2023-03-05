import axios from 'axios'
import router from './index'
import { useMenuStore } from '@/store'
import { IMenu, IRoute } from '@/typings'
import { RouteRecordRaw } from 'vue-router'

//**为通配符,vite不支持require导入方式,故用import.meta.glob(vite动态导入)
/*import.meta.glob
 * 该方法匹配到的文件默认是懒加载，通过动态导入实现，构建时会分离独立的 chunk，是异步导入，返回的是 Promise
 * /*import.meta.globEager
 * 该方法是直接导入所有模块，并且是同步导入，返回结果直接通过 for...in循环就可以操作
 */
const modules = import.meta.glob(`../views/**/*.vue`)

const component404 = () => import('@/views/exception/404.vue')

const staticMenu: IRoute[] = []

/**
 * 获取菜单叶子节点，生成一维菜单数组
 *  @param menuList - 菜单列表
 */
const getAllLeaf = (menuList: IMenu[]) => {
  const result: IMenu[] = []
  function getLeaf(menuList: IMenu[]) {
    menuList.forEach((item: IMenu) => {
      if (!item.children) {
        result.push(item)
      } else {
        getLeaf(item.children)
      }
    })
  }
  getLeaf(menuList)
  return result
}

/**
 * 初始化动态路由
 *  @param list - 菜单叶子节点列表
 *  @param dynamicMenu - 根据菜单生成动态路由列表
 */
export const initRoute = (list: IMenu[], dynamicMenu: IRoute[] = []) => {
  list.forEach((item: IMenu) => {
    if (item.path.indexOf('http') === 0) {
      return
    }
    dynamicMenu.push({
      path: item.path,
      name: item.name,
      // 这个写法在开发中可行，但是生产中不行
      // component: () => import(`../views/${item.component}`),
      component: modules[`../views/${item.component}`] || component404,
      meta: {
        title: item.title,
        keepAlive: Boolean(item.cache),
        icon: item.icon,
      },
    })
  })
  return dynamicMenu
}

/**
 * 根据菜单列表生成动态路由数据
 *  @param allMenuList - 菜单列表
 */
const getDynamicMenu = (allMenuList: IMenu[]) => {
  const allMenu = getAllLeaf(allMenuList) //拿到当前路由所有的信息，解构成一维简单数组方便判断
  const dynamicMenu = initRoute(allMenu)
  return dynamicMenu
}

// 根据name缓存页面
const addCacheList = (list: IRoute[]) => {
  const menuStore = useMenuStore()
  const cacheList = list.filter((item: IRoute) => item.meta.keepAlive)
  const cacheNameList = cacheList.map((item: IRoute) => item.name)
  menuStore.setCache(cacheNameList)
}

// 添加路由
const addRouter = (list: IRoute[]) => {
  const menuStore = useMenuStore()

  router.addRoute({
    path: '/',
    name: '/',
    redirect: menuStore.permissionMenu,
  })

  router.addRoute({
    path: '/',
    name: 'layout',
    component: () => import('@/layouts/index.vue'),
    children: [...staticMenu, ...list],
  } as unknown as RouteRecordRaw)

  // 添加完动态路由后再添加404页面，防止获取不到页面
  router.addRoute({
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/exception/404.vue'),
  })

  // 设置缓存页面
  addCacheList(list)
}

export const addRoutes = (menuList: IMenu[]) => {
  const menuStore = useMenuStore()
  menuStore.setMenuList(menuList)
  const dynamicMenu = getDynamicMenu(menuList || [])
  menuStore.setPermissionMenu(dynamicMenu?.[0]?.path)
  menuStore.setDynamicRouteList(dynamicMenu)
  addRouter(dynamicMenu)
  console.log(132)
}
