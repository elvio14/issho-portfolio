<script>
import '../../assets/popup.css'

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
        <div class="container-in  fade-scale-in ">
        <div class="content">
            <img src="/martinYukaBrad.webp" class="banner">
            
            <div class="text-container">
                <div class="center-heading">
                    <h1>The Team</h1>
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
            <img src="../../assets/isshotemp.webp" class="bottom-logo">
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