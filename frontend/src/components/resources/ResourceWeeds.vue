<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import '../../assets/popup.css'

export default {
    emits: ['update:weeds-resource'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:weeds-resource', false)
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
            
            <div class="text-container">
                <div class="center-heading">
                    <h1>Understanding Weeds and What They're Really Telling Us?</h1>
                </div>
                <div class="center-heading">
                    <img class="image-center" src="../../assets/weeds.jpg">
                </div>
                
                <h4>
                    Our visit to KnottyCoppertop's Apiary was such a memorable day.  We were fortunate to have a taste of the dandelion honey which was quite an eye opening experience.  I really wish I could have shared it with everyone.  The honey was so tasty that I wanted to understand more about dandelions and its misunderstood relationship in our gardens.   
                </h4>
                <h4>
                    But first, let's talk about "weeds", and no not the hit TV sitcom from 2005.  Weeds are the plants that every homeowner tries to prevent from popping up on their perfectly manicured lawns, flowerbeds or vegetable garden.  But did you know that weeds are actually a beneficial plant?  Let's dive into this article and debunk the myth that "weeds are bad".
                </h4>
                <h4>Weeds do three things that help maintain that balanced ecosystem.</h4>
                <h4>1. Signs of certain weeds helps us determine our quality of soil</h4>
                <h4>2. They help aerate and bring nutrients back into the soil</h4>
                <h4>3. Their flowers provide a food source for insects and act as an attractant for beneficial bugs for your garden</h4>
                <h4>
                    If you know an avid gardener, they would have most likely at some point mentioned something about the health of their soil.  Plants like any other living organism needs a good environment in order to thrive.  Some plants like rich fertile soil while others grow best in dense soil with few nutrients.
                </h4>
                <h4>
                    The majority of plants that we enjoy cultivating need fertile soil to thrive while and the ones that we deem as "weeds" grow in soil with poor conditions.  In a sense, this means that if we see weeds growing in our lawn, it's an indication of the soil's health.  By understanding each plant's needs, you're able to diagnose the soil's health.
                </h4>
                <br>
                <div class="center-heading">
                    <h1>    Everything that exists in our world plays a role in maintaining a balance in our ecosystem.  </h1>
                </div>
                <br>

                <div class="text-grid pc-only">
                    <h4>
                        Soil that is densely compacted need some form of aeration for proper root growth and development for plants.  These kinds of soil can be naturally changed over time with the presence of dandelions.  Dandelions have a root system that aerate your soil as it grows.  If you don't want to have a field of dandelion (or any weeds), just mow the lawn before the flowers turn into seeds.
                    </h4>
                    <h4 style="grid-column: 1;">
                        We support the idea of letting the dandelions bloom since it's a great early source of food for bees (so help a sister out) and other pollinators!  Spring is an important time for bees to build up their colonies, especially if they're coming out of a long cold winter.
                    </h4>
                    <div class="center-heading" style="grid-column: 2; grid-row: 1 / span 2;">
                        <img src="../../assets/weeds2.jpg" alt="Portrait photo at farm." style="width: 80%;">
                    </div>
                </div>

                <div class="mobile-only">
                    <div class="center-heading">
                        <img src="../../assets/weeds2.jpg" alt="Portrait photo at farm." style="width: 80%;">
                    </div>
                    <h4>
                        Soil that is densely compacted need some form of aeration for proper root growth and development for plants.  These kinds of soil can be naturally changed over time with the presence of dandelions.  Dandelions have a root system that aerate your soil as it grows.  If you don't want to have a field of dandelion (or any weeds), just mow the lawn before the flowers turn into seeds.
                    </h4>
                    <h4>
                        We support the idea of letting the dandelions bloom since it's a great early source of food for bees (so help a sister out) and other pollinators!  Spring is an important time for bees to build up their colonies, especially if they're coming out of a long cold winter.
                    </h4>
                </div>
                
                <h4>
                    If I was to take away one thing, it's that weeds shouldn't be looked upon as a negative thing.  If we truly understand weeds, it's Nature's way of telling us what is lacking in our soil.  It's also Nature's way of repairing the soil.  If you have a lot of dandelions, it shows that your soil is too compact and needs aeration.  There are plenty of other plants that can help give you an indicator of your soil quality.  If you're interested in learning more about weeds, <a href="https://www.almanac.com/what-weeds-tell-you-about-your-soil" target="_blank">the Farmer's Alamanac</a> is a great resource.
                </h4>

                <h4>Martin & Yuka</h4>
            </div>
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
.mobile-only{
    display: none;
}
@media (max-width: 850px){
    .mobile-only{
        display: block;
    }
    .pc-only{
        display: none;
    }
}
</style>
