<script>
import PlanetPopup from './PlanetPopup.vue';
import { ref, reactive, onMounted } from 'vue';
export default {
    name: 'PlanetTrigger',
    components: {
        PlanetPopup,
    },
    setup(){
        const showPopup = ref(false)

        const togglePopup = ()=>{
            showPopup.value = !showPopup.value
        }

        return {
            togglePopup,
            showPopup
        }
    }
}
</script>

<template>
    <div class="container">
        <img src="../assets/PlanetTrigger.jpg" @click="togglePopup"/>
    </div>
        <PlanetPopup v-if="showPopup"/>
        <button v-if="showPopup" class="x-button" @click="togglePopup">X</button>
    
</template>

<style scoped>

img{
    cursor: pointer;
}

.x-button{
        position: fixed;
        top:5%;
        left:5%;
        width: 40px;
        height: 40px;
        background-color: white;
        border: none;
        cursor:pointer;
        font-weight: 1000;
    }

@media(max-width:850px){
    .container{
        display: grid;
        grid-template-rows: auto auto;
    }
    img {
        width:90vw;
        height:auto;
        margin:auto;
        padding-top:3rem;
    }
    .learn{
        margin:auto;
    }

    .x-button{
        top: 5%;
    }
}
@media (min-width: 851px){
    img {
    width: 25vw;
    height: auto;
    padding-top: 15%;
    }
    .learn{
        padding-top: 2rem;
    }
}

</style>