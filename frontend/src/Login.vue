<script setup>
import '../src/assets/main.css'
import AdminLogin from './components/AdminLogin.vue';

</script>
<template>
    <div class="container">
    <h1>Hey admin! Please log in.</h1>
    <AdminLogin/>
    
    </div>
    
</template>
<style scoped>
    .container{
        border: 1px solid slategray;
        border-radius: 2rem;
        padding: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    span{
        font-size: larger;
    }
</style>