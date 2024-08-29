<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import '../../assets/popup.css'

export default {
    emits: ['update:honey-resource'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:honey-resource', false)
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
                    <h1>Local Honey vs Imported Honey</h1>
                </div>
                <div class="center-heading">
                    <img class="image-center" src="../../assets/localHoney.webp">
                </div>
                
                <h4>
                    If you needed to buy honey, you would most likely go to the local supermarket. You would select the jar with the most appealing packaging and one that was within your price point. What if I told you that the majority of honey found in grocery stores is actually a blend of sugar syrups and honey?
                </h4>
                <h4>
                    Not all honey is created equal. There is manmade honey and then there is honey made by bees. We need to first understand how honey is made in order to differentiate between good and bad honey.                
                </h4>
                <h4>
                    The majority of people have an idea as to how honey is made. In the simplest terms, Honey bees visit flowers for nectar and in the process, pollinate the flowers. When you purchase honey from a local beekeeper, you are essentially tasting the flavours of where the hive is located. It is quite similar to the concept of terroir in wines. A pinot noir from Burgundy will taste completely different from a pinot noir from Sonoma Valley.
                </h4>
                <h4>
                    Nectar is basically a sugar solution. The bees harvest nectar from the surrounding plants to produce honey for the winter. The nectar undergoes a process of evaporation and enzymatic activity before transforming into honey. Each flower has its own unique flavour and contributes to the overall taste of the honey.
                </h4>
                <h4>
                    When beekeepers extract the honey from the hives, it is considered raw and unpasteurized. It contains traces of pollen that provide nutritional benefits. However, it is advised that pregnant women and babies under 1 year old should not consume raw honey as it contains bacterial spores that can be harmful to an undeveloped digestive system. If you are concerned about consuming raw unpasteurized honey, we recommend that you consult your doctor.
                </h4>
                <h4>
                    With the increase in demand for honey and lower prices, humans have figured out a variety of ways to mass produce honey. Producers are blending honeys with a variety of syrups including high fructose corn syrup or rice syrup. These syrups have been linked to an increase risk of obesity, diabeties, heart disease and cancer. Unfortunately, the majority of honey that you find in supermarkets is probably cut with some form of syrup. This video from ABC News in Australia will explain more about the honey adulteration that is occurring world wide.
                </h4>

                <h4>Martin & Yuka</h4>
            </div>
        </div> 
    </div>
    </div>
    
</template>
