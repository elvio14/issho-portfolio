<script setup>
import ResourceWeeds from './components/resources/ResourceWeeds.vue';
import ResourceWelcome from './components/resources/ResourceWelcome.vue';
import {ref} from 'vue'

const showWelcome = ref(false)
const showWeeds = ref(false)
</script>
<template>
<div class="root">
    <div class="title">
        <img src="./assets/isshotemp.png" alt="issho logo" class="logo">
        <h1 class="title-h1">Resources</h1><br><br>
        <a href="../index.html">Back to Home</a>
    </div>
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
<style scoped>
.title-h1{
    display: inline;
    margin-left: 1rem;
}
.title{
    position: absolute;
    left: 5%;
    top: 4%;
}
.logo{
    width: 4vw;
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

@media (max-width: 850px){
    .title{
        text-align: center;
    }
    
    .logo{
        position: relative;
        width: 15vw;
    }
    .title-h1{
        position: relative;
        margin-left: 0px;
    }
    .thumbnail-container{
        margin-top: 260px;
        max-width: 95vw;
    }

    .thumbnail{
        width: 40vw;
    }

    .title{
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>