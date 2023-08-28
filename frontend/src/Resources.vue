<script setup>
import ResourceWeeds from './components/resources/ResourceWeeds.vue'
import ResourceWelcome from './components/resources/ResourceWelcome.vue'
import ResourceHoney from './components/resources/ResourceHoney.vue'
import ResourceFlour from './components/resources/ResourceFlour.vue'
import {ref} from 'vue'

const showWelcome = ref(false)
const showWeeds = ref(false)
const showHoney = ref(false)
const showFlour = ref(false)
</script>
<template>
<div class="root">
    <div class="title">
        <img src="./assets/isshotemp.png" alt="issho logo" class="logo">
        <h1 class="title-h1">Resources</h1><br><br>
        <a href="../index.html">Back to Home</a>
    </div>
    <div class="thumbnail-container">
        <div class="thumbnail-div" @click="showWelcome = true">
            <img class="thumbnail" src="./assets/easterBunnies.jpg">
            <h2 class="thumbnail-title">Welcome</h2>
        </div>
        <div class="thumbnail-div" @click="showWeeds = true">
            <img class="thumbnail"  src="./assets/weeds.jpg">
            <h2 class="thumbnail-title">Weeds</h2>
        </div>
        <!-- <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/beeWasp.jpg">
            <h2 class="thumbnail-title">Bee vs Wasp</h2>
        </div> -->
        <div class="thumbnail-div" @click="showHoney = true">
            <img class="thumbnail" src="./assets/localHoney.jpg">
            <h2 class="thumbnail-title">Local Honey</h2>
        </div>
        <div class="thumbnail-div" @click="showFlour = true">
            <img class="thumbnail" src="./assets/wheat.jpg">
            <h2 class="thumbnail-title">Flour</h2>
        </div>
        <!-- <div class="thumbnail-div">
            <img class="thumbnail" src="./assets/sourdough.jpg">
            <h2 class="thumbnail-title">Sourdough</h2>
        </div> -->
    </div>
    <div v-if="showWelcome">
        <ResourceWelcome @update:welcome-resource="showWelcome = $event"/>
    </div>
    <div v-if="showWeeds">
        <ResourceWeeds @update:weeds-resource="showWeeds = $event"/>
    </div>
    <div v-if="showHoney">
        <ResourceHoney @update:honey-resource="showHoney = $event"/>
    </div>
    <div v-if="showFlour">
        <ResourceFlour @update:flour-resource="showFlour = $event"/>
    </div>
    
</div>
</template>
<style scoped>
.thumbnail-title{
    color: black;
    position:absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
}
.thumbnail-div{
    text-align: center;
    position: relative;
}

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
    z-index: 1;
    opacity: 0.5;
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
        margin-top: 290px;
        max-width: 95vw;
        padding-bottom: 4rem;
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