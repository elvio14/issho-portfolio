<script>
import {ref} from 'vue'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const username = ref('')
        const password = ref('')

        const loginAdmin = async () => {
            try {
                const response = await fetch(`${backend}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username.value,
                        password: password.value
                    })
                })
                const data = await response.json()

                if(response.ok){
                    localStorage.setItem('accessToken', data.accessToken)
                    window.location.replace('../../admin.html')
                }else{
                    console.error('Login failed', data)
                }
            }catch (error){
                console.error(error)
            }
        }
        return {
            username, password, loginAdmin
        }
    }
}
</script>
<template>
    <div>
        <form @submit.prevent="loginAdmin">
            <input type="text" v-model="username" placeholder="Username"><br/>
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Login</button><br/>
            
        </form>
    </div>
</template>
<style scoped>
    input {
        padding: 0.8rem;
        margin: 0.5rem;
    }
    button {
        padding: 0.8rem;
        border: none;
        border: 2px solid aquamarine;
        background-color: white;
    }
    button:hover{
        background-color: aquamarine;
    }
</style>