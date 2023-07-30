<script setup>
import '../src/assets/main.css'
import AdminLogin from './components/AdminLogin.vue';
import { RouterView, RouterLink } from 'vue-router';

</script>
<template>
    <h1>Hey admin! Please log in.</h1>
    <AdminLogin/>
    <RouterView/>
</template>