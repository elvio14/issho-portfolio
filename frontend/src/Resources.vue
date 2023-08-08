<script setup>
import ResourceWeeds from './components/resources/ResourceWeeds.vue';
import ResourceWelcome from './components/resources/ResourceWelcome.vue';
import {ref} from 'vue'

const showWelcome = ref(false)
const showWeeds = ref(false)
</script>
<template>
<div class="root">
    <div class="thumbnail-container">
        <div class="thumbnail-div">
            <img class="thumbnail" @click="showWelcome = true" src="./assets/easterBunnies.jpg">
        </div>
        <div class="thumbnail-div">
            <img class="thumbnail" @click="showWeeds = true" src="./assets/weeds.jpg">
        </div>
        <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/beeWasp.jpg">
        </div>
        <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/localHoney.jpg">
        </div>
        <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/wheat.jpg">
        </div>
        <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/sourdough.jpg">
        </div>
    </div>
    <div v-if="showWelcome">
        <ResourceWelcome @update:welcome-resource="showWelcome = $event"/>
    </div>
    <div v-if="showWeeds">
        <ResourceWeeds @update:weeds-resource="showWeeds = $event"/>
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
    cursor: pointer;
}
</style>