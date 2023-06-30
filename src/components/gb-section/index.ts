import type { App } from 'vue'
import gbSection from './gb-section.vue'

export default {
    install(app:App) {
        app.component('gb-seciton', gbSection)
    }
}