import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Admin from './Admin.vue'
import Login from './Login.vue'
import routerAdmin from './router/routerAdmin.js'


import './assets/main.css'



const app = createApp(App)
app.use(createPinia());

const admin = createApp(Admin)
admin.use(createPinia())
admin.use(routerAdmin)

const login = createApp(Login)
login.use(createPinia())
login.use(routerAdmin)

app.mount('#app')
login.mount('#login')
admin.mount('#admin')