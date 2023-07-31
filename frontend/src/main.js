import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import routerAdmin from './router/routerAdmin.js'


import './assets/main.css'



const app = createApp(App)
app.use(createPinia());
app.use(routerAdmin)

app.mount('#app')