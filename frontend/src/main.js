import { createApp } from 'vue'
import {createHead} from '@vueuse/head'
import App from './App.vue'
import './assets/main.css'
import Resources from './Resources.vue'

const head = createHead()
const app = createApp(App)

app.use(head).mount('#app')

const resources = createApp(Resources)
resources.mount('#resources')

