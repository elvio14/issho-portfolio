<script>
import '../../assets/popup.css'

export default {
    emits: ['update:aboutHoney-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:aboutHoney-popup', false)
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
            <img src="../../assets/honeyBanner.png" alt="shelf view of honey jars" class="banner">
            
            <div class="text-container">
                <div class="center-heading">
                    <h3>Honey we carry:</h3>
                    <h1>Miels D'Anicet</h1>
                </div>
                
                <h4>
                    Miels D'Anicet is a notable artisanal honey producer based in the Laurentian region of Quebec, Canada. Founded by Anicet Desrochers, the company has garnered a reputation for producing high-quality, organic honey and honey-based products that showcase the unique flavors and benefits of the local flora.
                </h4>
                
                <h4>
                    Anicet Desrochers is a skilled beekeeper who is deeply passionate about sustainable beekeeping practices and the preservation of the natural environment. Miels D'Anicet is known for its commitment to ethical beekeeping, emphasizing the well-being of the bees and the ecosystems they thrive in.
                </h4>
                <h4>
                    The company's hives are strategically located in pristine areas of the Laurentian mountains, allowing the bees to collect nectar from a diverse array of wildflowers and plants. This natural foraging contributes to the distinct and rich flavors that characterize Miels D'Anicet's honey varieties.
                </h4>
                <h4>
                    Miels D'Anicet offers a range of artisanal honey products, including raw honey, creamed honey, and flavored honey infusions. Each product is carefully handcrafted to retain the unique flavors and nutritional benefits of the honey. The creamed honey, for example, undergoes a controlled crystallization process that creates a velvety texture, making it a sought-after gourmet treat.
                </h4>
                <h4>
                    The company's commitment to sustainability extends beyond its beekeeping practices. Miels D'Anicet utilizes eco-friendly packaging and supports local initiatives focused on conservation and the protection of pollinators. This dedication to environmental responsibility resonates with consumers who prioritize both the quality of the products they consume and their impact on the planet.
                </h4>
                <h4>
                    We would like to recommend honey from Knotty Coppertop if you're struggling to find a local beekeeper. We have been fortunate to partner with Mike Wood. His honey was ranked 1st Place in the Royal Winter Fair. His hives are located in Sparta, Ontario, on the fenceline between two organic farms.
                </h4>
                <h4>
                    He recommends applying honey to hot dishes as they are served: hot cereal, roasted fruit, and baked cheeses, and even pizza. You can also use a cold application by putting it on ice cream or for a real treat, a dollop of honey in a double bourbon. You can follow him @knottycoppertop on Instagram.
                </h4>
                <h4>
                    By purchasing from local beekeepers, you are supporting the local economy and creating a positive impact in the natural environment. Armed with this newfound knowledge, we hope this helps your search for good quality, local, uncontaminated honey.
                </h4>
            </div>
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