<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<h1 class="green" style="margin-left: 2rem;">Issho Admin Page</h1>
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