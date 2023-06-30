import type { App } from 'vue'
import gbSearch from './gb-search.vue'

export default {
    install(app:App) {
        app.component('gb-search', gbSearch )
    }
}