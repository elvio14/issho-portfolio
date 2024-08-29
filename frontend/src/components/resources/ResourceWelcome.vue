<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import '../../assets/popup.css'

export default {
    emits: ['update:welcome-resource'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:welcome-resource', false)
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
                    <h1>Welcome: The Resource Portal</h1>
                </div>
                
                <h4>
                    Just a friendly baker and creative pastry chef sharing thoughtful ideas and recipes to help you in your food baking adventure.
                </h4>
                <div class="center-heading">
                    <img class="image-center" src="../../assets/easterBunnies.webp">
                </div>
                
                <h4>
                    Welcome to our blog! We hope this blog can help shed some light in our baking and pastry world.  We have been fortunate to be in an industry that encourages us to work in different countries.  In the past seven years, we have worked in  in Australia, Canada and USA.  We have made friends along the way who have helped mentor and inspire us to become who we are today.  We hope you'll enjoy this blog and that our posts will shed some light on our baking and pastry adventure
                </h4>
                <h4>
                    If you have any questions or topics that you want us to address, we would love to hear from you.  Just send us a quick email and we'll be sure to feature it in our next post. 
                </h4>
                <h4>
                    Martin & Yuka
                </h4>
            </div>
        </div> 
    </div>
    </div>
    
</template>
