<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import '../../assets/popup.css'

export default {
    emits: ['update:flour-resource'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:flour-resource', false)
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
                    <h1>Flour</h1>
                </div>
                <div class="center-heading">
                    <img class="image-center" src="../../assets/wheat.webp" alt="a heap of flour">
                </div>
                
                <h4>
                    If you are thinking of grabbing a bag of flour for your next baking adventure, try using flour that was extracted by a stone mill. You won't regret it!
                </h4>
                <h4>
                    You might be wondering, "Why should I use flour that has been milled between two big stones?" The answer to that question is: nutrition and flavor. To fully understand the benefits, we need to first look at the anatomy of a wheat kernel and the milling process.
                </h4>
                <div class="center-heading">
                    <img class="image-center" src="../../assets/wheat2.webp" style="width: 200px;" alt="wheat anatomy">
                </div>
                <h4>A kernel of wheat can be broken down to into three parts: bran, endosperm and germ.</h4>
                <h4>Bran: is the outer husk of the wheat kernel. It contains three types of vitamin B, trace minerals and a good source of fibre.</h4>
                <h4>Endosperm: makes up the majority of the kernel and it is source of the flour. It contains the most protein, vitamin B, carbohydrates, iron and soluble fibre.</h4>
                <h4>Germ: is the part that of the grain that is in charge of sprouting. This part is usually separated in most milling processes as the fats in the germ will contribute to the flour turning rancid.</h4>
                <h4>
                    In this article, I would like to discuss about two kinds of mills that are used today: roller mills and stone mills. Each mill has its own pros and cons so let's dive right in.
                </h4>
                <h4>
                    Industrial millers prefer using roller mills to extract the flour due to its efficient output while extracting a consistent product. The wheat kernels are passed through large rolling pins at high speeds. Rollers mills are designed so well that they are able to separate the bran and germ to produce an extremely white flour. An efficient milling process creates an abundance of supply that results in lower prices. 90% of the flour you see in grocery stores will most likely be roller milled flour.
                </h4>
                <h4>
                    The fast extraction rate will result in an increase in frictional energy. At higher temperatures, nutrients and enzymes that are beneficial in the fermentation process are destroyed. As a result, industrial millers will actually add nutrients back into the flour at the end of the milling process. Flour with added nutrients is known as "enriched flour" at the grocery store.
                </h4>
                <br>
                <div class="center-heading">
                    <h1>    Nutrients and enzymes that are beneficial in the fermentation process are destroyed at higher temperature levels.  </h1>
                </div>
                <br>
                <h4>
                    Within the baking community, there is a movement to return to methods that preserve as much of the grain's nutrients and flavors. Stone milling is a process that enables millers to extract flour while minimizing the damage. During the milling process, the wheat is crushed between two heavy stones. The bran, germ and endosperm are crushed together before being sifted. The process allows the fats from the germ to become incorporated with the endosperm. The flour that is extracted tends to have a more yellow color and distinct aroma.
                </h4>
                <div class="center-heading">
                    <h1>    Stone milling is a process that minimizes nutritional damage in the flour extraction process.  </h1>
                </div>
                <h4>
                    A slower extraction translates to a decrease in frictional energy. As a result, flour extracted at lower temperatures will retain more of its nutritional content. However, the lower output of flour and the upkeep of a stone mill are some of the disadvantageous that are passed on to the bakers and consumers. It is common to see an increase in price in baked goods made with stone ground flour.
                </h4>
                <h4>
                    I hope that this article has helped in providing a better understanding of flour and that you might even feel inspired to bake something tasty! Next time, trying blending all purpose flour with stone ground flour. You will definitely notice a change in flavor.
                </h4>

                <h4>Martin & Yuka</h4>
                <span>(image of the anatomy of the wheat sourced from Flour.com)</span>
            </div>
        </div> 
    </div>
    </div>
    
</template>
