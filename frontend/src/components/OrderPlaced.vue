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
        const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"
        const orderID = ref('')
        const email = ref('')
        const {orderPlaced} = toRefs(props)
        const store = useCartStore()
        const {storeOrderTotal} = storeToRefs(store)
        const totalFixed = ref()
        const orderNumberRef = ref('')

        onMounted(
            function orderJustPlaced(){
                if (orderPlaced){
                    getLatestOrder()
                }
            }
        )

        const getLatestOrder = async ()=> {
            
            try{
                const response = await fetch(`${backend}/api/order/latest-order`)
                const order = await response.json()

                orderID.value = order.number
                email.value = order.email
                const total = storeOrderTotal.value
                totalFixed.value = (total.value/100).toFixed(2)

                const mailInfo = {
                email: email.value,
                order: orderID.value,
                amount: totalFixed.value
                }

                const result = await fetch(`${backend}/api/mail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mailInfo)
                })

                if (!result.ok) {
                    throw new Error(`Server responded with a ${result.status} status.`);
                } else{
                    console.log(result)
                }
            }catch(error){
                console.log(error)
            }
       }

        return { orderID, storeOrderTotal, totalFixed}
    }
}
</script>
<template>
    <div class="container">
    
        <h3>Order placed!</h3>
        <p> Your order number is: </p>
        <h3>{{ orderID }}</h3>
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