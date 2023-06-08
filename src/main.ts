import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './tailwind.css'
import './assets/variable.css'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugin'

const app = createApp(App)
const bootstrap =async () => {
  setupRouter(app)
  setupPlugins(app)
  await router.isReady() //当路径处理好了之后再去挂载组件
  app.mount('#app')
}

bootstrap()
