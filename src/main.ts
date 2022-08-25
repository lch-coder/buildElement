import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// normalize.css
import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
