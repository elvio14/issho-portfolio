<script>
import {FAQS} from '../DataArrays.js'
export default {
    emits: ['update:faq-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:faq-popup', false)
        }

        const faqsData = FAQS
        return {
            emitClose, faqsData
        }
    }
}
</script>
<template>
    <div class="root">
        <div class="overlay" @click="emitClose"></div>
        <div class="container-in">
        <div class="content">
            <h1>FAQs</h1>
            <div class="text-container">  
                <div>
                    <div @click="" v-for="(faq, index) in faqsData" :key="index" class="faq-container">
                            <h3  >{{faq.question}}</h3>
                            <p>{{ faq.answer }}</p>
                    </div>
               </div>
            </div>
            
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
    .faq-container{
        margin-bottom: 2.5rem;
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
        top:5%;
        left:5%;
        overflow:scroll;
        z-index: 2;
    }

    .content{
        margin:2rem;
        text-align: center;
        margin-bottom: 6rem;
    }

@media (max-width: 850px){
    .container-in{
        top:10%
    }

    .text-container{
        width: 95%;
    }

    #bee{
        width: 95%;
    }
}
</style>