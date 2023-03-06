import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupDirectives } from './directives'
import { setupEcharts } from '@/utils/echarts'
import VueGridLayout from 'vue-grid-layout'

// normalize.css
import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/scrollbar.scss'
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'

async function setupApp() {
  const app = createApp(App)

  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$loading = ElLoading
  app.config.globalProperties.$msgbox = ElMessageBox
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$confirm = ElMessageBox.confirm

  // store plugin: pinia
  setupStore(app)

  // vue router
  await setupRouter(app)

  // vue directives
  setupDirectives(app)

  // echarts
  setupEcharts(app)

  // 拖拽布局组件
  app.use(VueGridLayout)

  // mount app
  app.mount('#app')
}

setupApp()
