<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'

export default {
    emits: ['update:planet-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:planet-popup', false)
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
            <div class="content" >
                <img src="../assets/planetCircle.png" class="planetCircle">
                <h1>1% for the Planet</h1>
                <div class="text-container">
                    <h3 class="p">
                The Organization

1% for the Planet is a global organization that exists to ensure our planet and future generations thrive. They inspire businesses and individuals to support environmental nonprofits through membership and everyday actions.
            <br/><br/> They make environmental giving easy and effective through partnership advising, impact storytelling and third-party certification.
Started in 2002 by Yvon Chouinard, founder of Patagonia, and Craig Mathews, founder of Blue Ribbon Flies, business members and individual members have given hundreds of millions of dollars to approved nonprofit partners.
<br/><br/>Today, 1% for the Planet’s global network consists of thousands of businesses, individuals and environmental nonprofits working toward a better future for all.
Follow the link to learn more about the organization: <a href="https://www.onepercentfortheplanet.org/">1% for the Planet</a>
                </h3>
                <h3>
                Why did we join?

As individuals, we believe that it's our responsibility to take care of the planet.  Apart from recycling, composting and minimizing our plastic usage, we believe that we must do more. 

 
<br/>
By joining 1% for the Planet, we are  implementing an environmental tax on ourselves.  It's a small price to pay to try and help preserve our home for future generations. 

​<br/>

We will be directing our donations to Ontario nonprofit partners who have a focus on water, land, and wildlife preservation.
                </h3>
                </div>
                <img src="../assets/PlanetTrigger.jpg" class="bottom-img pc">
                <img src="../assets/planetVertical.png" class="bottom-img mobile">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bottom-img{
        width:60%;
    }
    .text-container{
        text-align: justify;
        display: inline-block;
        width: 60%;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    .planetCircle{
        height: 400px;
        width: auto;
    }
    .container-in{
        width: 90vw;
        height: 90vh;
        position: fixed;
        background-color: white;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
        overflow: auto;
        z-index: 2;
        box-shadow: var(--popup-shadow);
        text-align: center;
    }

    .content{
        text-align: center;
        margin-bottom: 6rem;
        margin: 2rem;
    }

    .mobile{
        display: none;
    }



@media (max-width: 850px){
    .container-in{
        margin-top:14%
    }

    .text-container{
        width: 95%;
    }

    .p{
        width: 100%
    }

    .mobile{
        display:inline-block;
        margin: 2rem;
        width: 40%;
    }

    .pc{
        display: none;
    }
}
</style>