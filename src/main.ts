import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

// normalize.css
import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/scrollbar.scss'
const app = createApp(App)

setupStore(app)

app.use(router)
app.mount('#app')
