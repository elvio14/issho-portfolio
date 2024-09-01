import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import Resources from './Resources.vue'

const app = createApp(App)
app.use(createPinia())

const resources = createApp(Resources)
resources.mount('#resources')

app.mount('#app')