<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'

export default {
    emits: ['update:about-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:about-popup', false)
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
            <img src="../assets/martinYukaBeeTemp.jpg" id="bee">
            
            <div class="text-container">
                <div class="center-heading">
                    <h1>About Us</h1>
                </div>
                
                <h4>
                    Bakeries were once used as a place of communal gathering.
                    They were places to for loved ones and the community to mingle, to gossip, and to celebrate.
                    They were, in essence, a place for togetherness. <br/><br/>
                    So in early 2020, ISSHO was born.  Located in Toronto, Ontario we are a local Canadian bakery
                    that strives to use the best ingredients and practices in creating our artisanal bake goods.
                    By combining ingredients from local purveyors and freshly milled flour, we create a delicious 
                    product that is packed with flavor and loaded with nutrients.  We hope that by sharing our delicious 
                    baked goods with you, you too can take on this idea of "issho" and create lasting memories with your loved ones.​
                </h4><br/>
                <div class="center-heading">
                    <h1>The Baker & Pastry Chef</h1>
                </div>
                
                <h4>
                    Martin and Yuka have worked and trained in Michelin restaurants, chocolate & pastry shops, and bakeries in New York, Vancouver and Melbourne.  Over the past seven years, their travels and experience has helped shape their philosophy in food:  utilising the best seasonal ingredients, showcasing an appreciation for unique flavors of different cultures and supporting local producers.
                    They strongly believe long lasting memories can be created with delicious food.  Whether it's sharing a chocolate cookie over a glass of warm milk or hosting a pizza party, they aim to help create that experience through their products and resource blog.
                </h4><br/>
                <div class="center-heading">
                    <h1>Wheat Philosophy</h1>
                </div>
                
                <h4>
                    Flour is a fundamental ingredient for any bakery.  It contributes to the structure, texture and flavour in each baked good.  When the right flour is used, you can create the perfect cookie or loaf of bread.  Our goal is to bring out the best qualities of the flour in all our products.
                    In order for us to use the best quality of flour, we need great farmers and millers.  Through your support, we can create a market for grains that helps local farmers improve their margins while continuing the practice of sustainable agriculture.
                    At the bakery we use flour milled by a local miller in Fergus, Ontario: 1847 Stone Milling.  They source only 100% certified organic grains that ensure sustainable agricultural practices (free from GMOs, pesticides or herbicides)
                    They work with farmers who focus on the care of their land and the grains they produce. The result is healthier flour with unique flavour profiles that reflect the land from where it grew.
                </h4>
            </div>
            <img src="../assets/isshotemp.png" class="bottom-logo">
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
    .center-heading{
        text-align: center;
    }
    .bottom-logo{
        width: 12vw;
        margin-top:3rem;
        position: relative;
        display: flex;
        left: 50%;
        transform: translateX(-50%);
    }   
   .text-container{
    width: 60%;
    display: inline-block;
    text-align: justify;
    }

    #bee{
        width: 60%;
        display:inline-block;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    .container-in{
        width: 90vw;
        height: 90vh;
        position: fixed;
        background-color: white;
        box-shadow: var(--popup-shadow);
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        overflow:scroll;
        z-index: 2;
    }

    .content{
        margin:2rem;
        text-align: center;
        margin-bottom: 6rem;
    }

@media (max-width: 850px){
    .bottom-logo{
        width: 40vw;
    }
    .container-in{
        margin-top:14%
    }

    .text-container{
        width: 95%;
    }

    #bee{
        width: 95%;
    }
}
</style>