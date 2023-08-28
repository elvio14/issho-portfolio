<script>
import '../../assets/popup.css'

export default {
    emits: ['update:aboutFlour-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:aboutFlour-popup', false)
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
            <img src="../../assets/flourBanner.jpg" alt="shelf view of honey jars" class="banner">
            
            <div class="text-container">
                <div class="center-heading">
                    <h3>Flour we use:</h3>
                    <h1>1847 Stone Milling</h1>
                </div>
                
                <h4>
                    1847 Stone Milling started with the idea to deliver fresh organic flour to Canadians coast-to-coast. We believe that if we source the highest quality Canadian grains and mill them as fresh as possible, the outcome is flour you are proud to bake with. Founded back in 2014 in smalltown Fergus, Ontario by family members Sasha, Melissa and Trevor when they restored a heritage barn on their family farm and imported an Austrian grist mill. The business has expanded over time to better serve our customers with a broader selection of specialty grains, the option for farm gate pick-up and deliveries directly to your door all across Canada.
                </h4>
                
                <h4>
                    The business name comes from the original 1847 stone house still standing on our family farm in the agricultural heartland of rural Ontario where the business was founded. Built in a simpler time when quality materials were used to make a home last for centuries and the inspiration for our flour. Surrounded by a community of hardworking farmers, we work closely with our neighbours to continuously improving the quality and flavour of the grains to deliver the finest flours directly to your kitchen.
                </h4>
                <img src="../../assets/peopleInWheat2.jpg" alt="3 people in a wheat field" class="banner">
                <h4>
                    Since the beginning, 1847 has valued balancing social responsibility with profitability and has eliminated plastic from its packaging favouring compostable bags as an alternate, remained carbon negative through 100% solar electricity and sourcing only Canadian grown grains.
                </h4>
                <h4>
                    Miels D'Anicet offers a range of artisanal honey products, including raw honey, creamed honey, and flavored honey infusions. Each product is carefully handcrafted to retain the unique flavors and nutritional benefits of the honey. The creamed honey, for example, undergoes a controlled crystallization process that creates a velvety texture, making it a sought-after gourmet treat.
                </h4>
                <h4>
                    The company's commitment to sustainability extends beyond its beekeeping practices. Miels D'Anicet utilizes eco-friendly packaging and supports local initiatives focused on conservation and the protection of pollinators. This dedication to environmental responsibility resonates with consumers who prioritize both the quality of the products they consume and their impact on the planet.
                </h4>
                <h4>
                    The McKeown family are farmers who know the importance of the food, as they are Foodland Ontario Certified! They are proud to be able to help feed the community and country with their crops.
                </h4>
                
            </div>
            <img src="../../assets/peopleInWheat.jpg" alt="3 people in a wheat field" class="banner">
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