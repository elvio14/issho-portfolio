<script>
import {FAQS} from '../../DataArrays.js'
import '../../assets/popup.css'

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