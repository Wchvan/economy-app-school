import type { App } from 'vue'
import gbAvatar from './gb-avatar'
import gbSection from './gb-section'
import gbSearch from './gb-search'
import gbTab from './gb-tab'

const components = [
  gbAvatar,
  gbSection,
  gbSearch,
  gbTab
]

/* 让这个组件可以通过use的形式使用 */
export default {
    install(app: App) {
        components.forEach(item => {
            app.use(item)
        })
    }
}