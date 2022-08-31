import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { getLocalStorage } from '@/utils/storage'
import { addRoutes } from './route'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意必须要引入css样式文件
NProgress.configure({ showSpinner: false })

import { useMenuStore } from '@/store/modules/menu'
import { useProcessStore } from '@/store/modules/process'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login.vue'),
  },
  {
    path: '/redirect/:path*',
    name: 'redirect',
    component: () => import('@/layouts/process/redirect'),
  },
]

const router = createRouter({
  history: createWebHistory('/buildElement/'),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const processStore = useProcessStore()
  processStore.addProcess({
    label: (to.meta.title || to.name) as string,
    value: to.fullPath,
    name: to.name as string,
    active: true,
  })
  NProgress.start()
  // token存在
  if (getLocalStorage('token')) {
    const menuStore = useMenuStore()
    if (to.path === '/login') {
      // 存在token并且跳转到登录页，默认跳转进项目有权限的第一个菜单
      next({
        path: menuStore.permissionMenu,
      })
    } else {
      if (menuStore.menuList.length > 0) {
        next()
      } else {
        await addRoutes()
        next({
          ...to,
          replace: true,
        })
      }
    }
  } else {
    if (to.path !== '/login') {
      ElMessage.warning('您还未登录，请先登录')
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  // 设置document title
  useTitle(to.meta.title as string)
  NProgress.done() // 进度条结束
})

export default router
