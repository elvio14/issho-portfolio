<script setup>
import ResourceWelcome from './components/resources/ResourceWelcome.vue';
import {ref} from 'vue'

const showWelcome = ref(false)
</script>
<template>
<div class="root">
    <div class="thumbnail-container">
        <img class="thumbnail" @click="showWelcome = true" src="./assets/easterBunnies.jpg">
        <img class="thumbnail" src="./assets/weeds.jpg">
        <img class="thumbnail" src="./assets/beeWasp.jpg">
        <img class="thumbnail" src="./assets/localHoney.jpg">
        <img class="thumbnail" src="./assets/wheat.jpg">
        <img class="thumbnail" src="./assets/sourdough.jpg">

    </div>
    <div v-if="showWelcome">
        <ResourceWelcome @update:welcome-resource="showWelcome = $event"/>
    </div>
    
</div>
</template>
<style>
.red{
    color: red;
}

.thumbnail-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.thumbnail{
    width: 400px;
    height: 240px;
    object-fit: cover;
}
</style>