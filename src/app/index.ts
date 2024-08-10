import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Quasar } from './providers/quasar'
import 'reflect-metadata'

import App from './App.vue'
import router from './providers/router'

export const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
    })
