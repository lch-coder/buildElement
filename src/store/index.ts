import type { App } from 'vue'
import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

const store = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//pinia使用
store.use(piniaPluginPersistedstate)
store.use(({ store }) => {
  store.$router = markRaw(router)
})

export function setupStore(app: App) {
  app.use(store)
}

export * from './modules/app'
export * from './modules/menu'
export * from './modules/process'
export * from './modules/user'
export * from './modules/tab'
