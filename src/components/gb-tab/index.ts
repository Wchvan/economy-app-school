import type { App } from 'vue'
import gbTab from './gb-tab.vue'
import gbTabItem from './gb-tab-item.vue'

export default {
    install(app:App) {
        app.component('gb-tab', gbTab)
        app.component('gb-tab-item', gbTabItem)
    }
}