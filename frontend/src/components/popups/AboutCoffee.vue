<script>
import '../../assets/popup.css'

export default {
    emits: ['update:aboutCoffee-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:aboutCoffee-popup', false)
        }

        const roastersImg = [
            {img: "detour", url: "https://detourcoffee.com/"},
            {img: "hatch", url: "http://www.hatchcrafted.com/"},
            {img: "hof", url: "https://www.houseoffunkbrewing.com/"},
            {img: "lilo", url: "https://coffee.liloinveve.com/"},
            {img: "lulo", url: "https://lulocoffee.ca"},
            {img: "rooftop", url: "https://www.rooftopcoffeeroasters.com/"},
            {img: "sept", url: "https://september.coffee/"},
            {img: "yamabiko", url: "https://www.yamabikocoffeeroasters.com/"},
        ]

        return {
            emitClose,
            roastersImg
        }
    }
}
</script>
<template>
    <div class="root">
        <div class="overlay" @click="emitClose"></div>
        <div class="container-in fade-scale-in">
        <div class="content">            
            <div class="text-container">
                <div class="center-heading">
                    <h1>Our Coffee Program</h1>
                </div>
                <h4>
                At Issho, we curate a coffee program that welcomes everyone—from the casual sipper to the curious connoisseur. Whether you're drawn to classic chocolatey, nutty profiles or prefer something bright, fruity, and unexpected, we’ve got a cup for you.
                </h4><h4>
Each week, we spotlight a different roaster. We start close to home with roasters from across Canada, then expand outwards—often featuring some of our favorite roasters from Japan and beyond. It's a rotating lineup that keeps things fresh and exciting.
</h4><h4>
Our house espresso is a comforting constant: always chocolatey and nutty at its core, with subtle hints of fruit and sweetness to keep it interesting. Every now and then, we’ll throw in a feature espresso that flips the script—think juicy, fruity, and a little bit funky.
</h4><h4>
There’s always something brewing at Issho.
</h4>
            </div>
            <div class="img-flex">
                <a v-for="(roaster, index) in roastersImg" :href="roaster.url" target="_blank">
                <img 
                     :key="index" 
                     :src="`/roasters/${roaster.img}.png`" 
                     :alt="roaster.img" 
                     class="roaster-img"
                 />
                </a>
            </div>
            
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
.roaster-img{
    height: 10rem;
    width: 14rem;
    object-fit: scale-down;
    cursor:pointer;
    border: solid 2px transparent;
}

.roaster-img:hover{
    border-color: var(--green-light);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.img-flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centers items horizontally */
    align-items: center; /* Centers items vertically */
    gap: 4rem; /* Adds spacing between items */
    padding-left: 16rem;
    padding-right: 16rem;
    padding-top: 5rem;
}
.banner{
    width: 60%;
    display:inline-block;
}

@media (max-width: 850px){
.img-flex{
    padding: 1rem;
}
.banner{
    width: 95%;
}
}
</style>