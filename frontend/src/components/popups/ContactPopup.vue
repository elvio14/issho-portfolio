<script>
import '../../assets/popup.css'

export default {
    emits: ['update:contact-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:contact-popup', false)
        }
        return {
            emitClose, contactsData
        }
    }
}
</script>
<template>
    <div class="root">
        <div class="overlay" @click="emitClose"></div>
        <div class="container-in">
        <div class="content">
            <h1>Contact</h1>
            <div class="text-container">  
                
            </div>
            
        </div> 
    </div>
    </div>
    
</template>