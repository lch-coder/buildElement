import type { App } from 'vue'
import { createPinia } from 'pinia'
const store = createPinia()

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//pinia使用
store.use(piniaPluginPersistedstate)

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
