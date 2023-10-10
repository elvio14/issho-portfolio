<script>
import { storeToRefs } from 'pinia'
import {ref, onMounted, computed, toRefs} from 'vue'
import { useCartStore } from '../stores/cartStore'

export default {
    props: {
        orderPlaced: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, {emit}){
        const backend = import.meta.env.VITE_BACKEND_URL
        const orderID = ref('')
        const email = ref('')
        const {orderPlaced} = toRefs(props)
        const store = useCartStore()
        const {storeOrderTotal} = storeToRefs(store)
        const totalFixed = ref()

        onMounted(
            function orderJustPlaced(){
                if (orderPlaced){
                    getLatestOrder()
                    sendMail()
                }
            }
        )

        const getLatestOrder = async ()=> {
            
            try{
                const response = await fetch(`${backend}/api/order/latest-order`)
                const order = await response.json()

                orderID.value = order._id
                email.value = order.email
                const total = storeOrderTotal.value
                totalFixed.value = (total.value/100).toFixed(2)
            }catch(error){
                console.log(error)
            }
       }

       const orderNumber = computed(()=>{
            return orderID.value.slice(-7)
        })

       const sendMail = async () => {
            const mailInfo = {
                email: email.value,
                order: orderNumber,
                amount: totalFixed.value
            }
            try{
                const sendMail = await fetch(`${backend}/api/mail/trap`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mailInfo)
                })

                console.log("Mail sent.")

            }
            catch(error){
                console.log(error)
            }
       }

        

        return { orderNumber, storeOrderTotal, totalFixed}
    }
}
</script>
<template>
    <div class="container">
    
        <h3>Order placed!</h3>
        <p> Your order number is: </p>
        <h3>{{ orderNumber }}</h3>
        <p> Please e-transfer the amount: ${{ totalFixed }} to isshobakery@gmail.com with your order number as the note.</p>
    </div>
    
</template>
<style scoped>
    .container{
        padding: 2rem;
        box-shadow: var(--popup-shadow);
    }

    .x-button{
        width:30px;
        height:30px;
        border:none;
        position: absolute;
        top: 0;
        right: 0;
    }

    @media (max-width: 850){
        .container{
            width: 90vw;
            height: 90vh;
        }
    }
</style>