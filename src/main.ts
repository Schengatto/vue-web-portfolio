import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createHead } from "@vueuse/head"
import router from './router'
import i18n from './i18n'

const app = createApp(App)

const head = createHead()
app.use(head)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
