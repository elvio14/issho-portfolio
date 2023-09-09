<script>
import '../../assets/popup.css'

export default {
    emits: ['update:aboutCoffee-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:aboutCoffee-popup', false)
        }

        return {
            emitClose
        }
    }
}
</script>
<template>
    <div class="root">
        <div class="overlay" @click="emitClose"></div>
        <div class="container-in">
        <div class="content">
            <img src="../../assets/detourBanner.png" alt="shelf view of detour coffee bags" class="banner">
            
            <div class="text-container">
                <div class="center-heading">
                    <h3>Coffee Program</h3>
                    <h1>Detour Coffee Roasters</h1>
                </div>
                
                <h4>
                    Detour Coffee Roasters, located in Hamilton, Ontario, is a renowned coffee establishment known for its dedication to quality coffee sourcing, roasting, and a commitment to the craft of coffee making. Detour has grown to become a staple in the local and Canadian coffee scene.
                </h4>
                
                <h4>
                    The roastery takes pride in its emphasis on direct trade relationships with coffee producers around the world, ensuring fair and sustainable practices. Detour is committed to sourcing high-quality beans and often focuses on single-origin offerings, allowing customers to experience the unique flavors and profiles of different coffee-growing regions.
                </h4>
                <h4>
                    Detour's commitment to sustainability is also notable, with efforts to minimize its environmental impact. From sourcing eco-friendly packaging to supporting environmentally conscious initiatives, the roastery strives to contribute positively to both the coffee industry and the planet.
                </h4>
            </div>
            <img src="../../assets/detourLogo.png" class="bottom-logo">
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
.banner{
    width: 60%;
    display:inline-block;
}

.bottom-logo{
    display: block;
    width: 10vw;
    position: relative;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
}

@media (max-width: 850px){
.bottom-logo{
    width: 40vw;
}

.banner{
    width: 95%;
}
}
</style>