import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Admin from './Admin.vue'
import routerAdmin from './router/routerAdmin.js'

import './assets/main.css'
import LoginVue from './Login.vue'

const app = createApp(App)
app.use(createPinia())

const admin = createApp(Admin)
admin.use(routerAdmin)

const login = createApp(LoginVue)
login.mount('#login')

admin.mount('#admin')
app.mount('#app')