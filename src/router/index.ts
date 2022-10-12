import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { getLocalStorage } from '@/utils/storage'
import { addRoutes } from './route'
import { App } from 'vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意必须要引入css样式文件
NProgress.configure({ showSpinner: false })

import { useMenuStore } from '@/store/modules/menu'
import { ElMessage } from 'element-plus'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/user/login.vue'),
  },
  {
    path: '/redirect/:path*',
    name: 'redirect',
    meta: {
      title: '重定向',
    },
    component: () => import('@/layouts/redirect/redirect.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()
  // token存在
  if (getLocalStorage('token')) {
    const menuStore = useMenuStore()
    if (menuStore.menuList.length > 0) {
      next()
    } else {
      await addRoutes()
      next({
        ...to,
        replace: true,
      })
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
  useTitle((to.meta.title || '暂无标题') + ' | Build Element')
  NProgress.done() // 进度条结束
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
