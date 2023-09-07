<script setup>
import { RouterLink, RouterView } from 'vue-router'

const logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = 'index.html'
}
</script>
<template>
<h1 class="green" style="margin-left: 2rem;">Issho Admin Page</h1>
<div>
    <button class="logout" @click="logout">LOGOUT</button>
</div>
<div class="routers">
    <RouterLink to="/">Orders</RouterLink>
    <RouterLink to="/upload">Upload</RouterLink>
    <RouterLink to="/adminproducts">Products</RouterLink>
</div>

<div>
    <RouterView/> 
</div>
</template>
<style scoped>
.logout {
    position:absolute;
    right: 5%;
    top: 5%;
    padding: 1rem;
    background-color: lightgoldenrodyellow;
    font-weight: 800;
    border: none;
    cursor: pointer;
}
.logout:hover{
    background-color: lightcoral;
}
.routers{
    padding: 1rem;
    display: inline-block;
    cursor: pointer;
}

a{
    padding: 1rem;
    margin: 1rem;
    font-weight: 800;
}
.router-link-exact-active {
    color: var(--color-text);
    background-color: aquamarine;
  }
</style>