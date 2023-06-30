import type { App } from 'vue'
import gbAvatar from './gb-avatar.vue'

export default {
    install(app:App) {
        app.component('gb-avatar', gbAvatar)
    }
}