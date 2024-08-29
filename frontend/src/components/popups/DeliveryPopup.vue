<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import '../../assets/popup.css'

export default {
    emits: ['update:delivery-popup'],
    setup(props, {emit}){
        const emitClose = ()=>{
            emit('update:delivery-popup', false)
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
                <img class="img-center" src="https://static.wixstatic.com/media/937c8c_928aa69b7a464f0480fa05e22ae80d87~mv2.webp/v1/fill/w_960,h_547,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/937c8c_928aa69b7a464f0480fa05e22ae80d87~mv2.webp">

                <div class="center-heading">
                    <h1>Delivery with NRBI</h1>
                    <h3 style="margin-top: -1.5rem; margin-bottom: 2rem;">Embracing Sustainability: Our Zero Emission Cycling Delivery Partnership with NRBI</h3>
                </div>
                
                <h4>
                    We have always believed that delicious baked goods should not only bring joy to your taste buds but also contribute to a healthier and greener planet. That's why we are thrilled to announce our latest partnership with NRBI, an innovative delivery company that shares our passion for sustainability. Together, we are introducing a zero-emission cycling delivery system that ensures your orders arrive fresh, on time, and with minimal impact on the environment.    
                </h4><br/>
                <div class="center-heading">
                    <h1>Delivery Zone: Check Our <a href="https://www.nrbi.co/service-area" target="_blank">Website</a> for Details</h1>
                </div>
                <h4>
                    Our NRBI zero emission cycling deliveries are currently available within a designated delivery zone. To see if your location falls within this area and explore more about our delivery services, please refer to the image below.
                </h4>
                <img class="img-center map" src="https://static.wixstatic.com/media/937c8c_cd03a48a8cd84161bd738bf46714a846~mv2.webp/v1/fill/w_1152,h_503,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/937c8c_cd03a48a8cd84161bd738bf46714a846~mv2.webp">
                <div class="center-heading">
                    <h1>Convenient Delivery Hours: 12:00 pm - 4:00 pm</h1>
                </div>
                <h4>We understand how valuable your time is, and we want to ensure your baked goods reach you when it's most convenient. With the NRBI zero emission cycling delivery system, you can expect your orders to be delivered between 12:00 pm and 4:00 pm.</h4>
                <h4>Our carefully chosen delivery window aligns with the busiest hours of the day, ensuring that your treats arrive when you're most likely to be home or at the office. This optimized delivery schedule allows us to make the most efficient use of our delivery routes and further reduces our environmental impact.</h4>
                <div class="center-heading">
                    <h1>No Minimum Orders: Small Steps Towards a Bigger Impact</h1>
                </div>
                <h4>We believe that every individual action matters when it comes to preserving the environment. That's why we are proud to offer no minimum order requirements for our zero-emission cycling deliveries. Whether you're treating yourself to a single cookie or ordering a full box of pastries, every order counts in our collective effort to reduce carbon emissions.</h4>
                <h4>By removing minimum order restrictions, we aim to make sustainable choices accessible to all our customers. So, whether it's a small treat for yourself or a gift for a loved one, you can make a positive impact on the planet with every order.</h4>
                
                <div class="center-heading">
                    <h1>Pedaling Towards a Greener Future</h1>
                </div>
                <h4>
                    As concerns about climate change continue to grow, it is essential for businesses to take meaningful steps towards reducing their carbon footprint. Our partnership with NRBI represents a significant commitment to sustainability and environmental responsibility. NRBI's zero-emission cycling fleet allows us to deliver our delightful treats without contributing to harmful greenhouse gas emissions.
                    <br/><br/>
                    By embracing this eco-friendly delivery system, we are collectively helping to combat air pollution, reduce traffic congestion, and create a cleaner, healthier environment for everyone. Every pedal-powered delivery brings us closer to a greener future—one delicious package at a time.
                </h4><br/>
                <div class="center-heading">
                    <h1>Flat Delivery Fee: Affordable and Eco-Conscious</h1>
                </div>
                <h4>
                    We understand that convenience and affordability are essential factors for our customers. With the new NRBI zero emission cycling delivery system, we are introducing a $10 flat delivery fee for all orders, regardless of size. Whether you're ordering a single pastry to satisfy a craving or treating your friends and family to an assortment of goodies, you can now enjoy sustainable and budget-friendly delivery options.
                    <br/><br/>
                    By adopting a flat delivery fee, we aim to encourage more customers to choose the eco-conscious option without worrying about additional costs. Together, we can make a difference and show that sustainability doesn't have to come at a premium price.
                </h4>
                <div class="center-heading">
                    <h1>Join Us on the Journey</h1>
                </div>
                <h4>We are excited to embark on this journey towards a greener future with NRBI by our side. By choosing our zero emission cycling delivery option, you become an integral part of our sustainability mission. Together, we can pedal towards a brighter, cleaner, and more sustainable world.</h4>
                <h4>The next time you place an order with [Your Bakery Name], opt for the NRBI zero emission cycling delivery and take a delicious step towards preserving our planet. Thank you for supporting us in our commitment to making the world a better place—one scrumptious delivery at a time</h4>
                <h3>Stay tuned for more updates on our sustainability initiatives and new mouthwatering treats. At ISSHO, we're baking with love for both you and the planet.</h3>
            </div>
        </div> 
    </div>
    </div>
    
</template>
<style scoped>
.map{
    width: 100vw;
}
</style>
