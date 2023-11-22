import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './config';

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
