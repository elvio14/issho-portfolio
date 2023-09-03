import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Admin from './Admin.vue'
import routerAdmin from './router/routerAdmin.js'
import './assets/main.css'
import LoginVue from './Login.vue'
import Resources from './Resources.vue'
import { Cloudinary } from '@cloudinary/url-gen'

const app = createApp(App)
app.use(createPinia())
export const cld = new Cloudinary({
    cloud: {
        cloudName: 'dy6sxilvq',
    }
})

const admin = createApp(Admin)
admin.use(routerAdmin)

const login = createApp(LoginVue)
login.mount('#login')

const resources = createApp(Resources)
resources.mount('#resources')

admin.mount('#admin')
app.mount('#app')