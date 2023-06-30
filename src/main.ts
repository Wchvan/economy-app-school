import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import myUI from '@/components'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia).use(myUI)
  return {
    app,
  }
}