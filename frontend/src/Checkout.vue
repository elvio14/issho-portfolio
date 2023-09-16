<script>
import { useCartStore } from './stores/cartStore'
import {storeToRefs} from 'pinia'
import {ref, computed, watch} from 'vue'
import { cloneDeep } from 'lodash'

export default {
    setup(props, {emit}) {
        const backend = import.meta.env.VITE_BACKEND_URL
        

        const flexibleDelivery = ref(false)
        const deliveryDate = ref()
        const fullName = ref('')
        const address = ref('')
        const postalCode = ref('')
        const email = ref('')
        const dateAlert = ref(false)

        const store = useCartStore()
        const { items } = storeToRefs(store)
        const {storeOrderTotal} = storeToRefs(store)

        watch(deliveryDate, (newVal) => {
            if(newVal !== null){
            dateAlert.value = false;
            }
        })

        const totalOrderRef = storeOrderTotal.value

        const placeOrder = async () => {
            const productsInItems = cloneDeep(
                items.value.map(item => ({
                    title: item.title,
                    quantity: item.quantity
            }))
            )
            const totalOrder = storeOrderTotal.value;
            const orderData = {
                products: productsInItems,
                total: totalOrder.value,
                email: email.value,
                fullName: fullName.value,
                flexibleDelivery: flexibleDelivery.value,
                deliveryDate: deliveryDate.value,
                address: address.value,
                postalCode: postalCode.value,
                status: "pending",
            }
                
            if (flexibleDelivery.value === false && deliveryDate.value === null){
                dateAlert.value = true
            } else{
                try {
                    const response = await fetch(`${backend}/api/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                    });
                
                    if(response.ok){
                        const data = await response.json()
                        console.log(data)
                        emit('update:orderIsPlaced', true)
                    }
            } 
            catch (error) {
                console.log(error);
            }
            }
            
            
        };

        const cancelCheckout = () => {
            emit('update:showCheckoutProp', false)
        }

        const deliveryLink = () => {
            emit('update:showCheckoutProp', false)
            emit('update:showDelivery', true)
        }

        return { flexibleDelivery, deliveryDate, 
            fullName, address, postalCode, placeOrder, cancelCheckout, email, deliveryLink, dateAlert, totalOrderRef };
    }
}
</script>
<template>
<div class="root">
    <div id="checkout">
            <h2>CHECKOUT</h2>
    </div>
    <div class="grid-container">
        
        <div class="info">
            <p>
                To ensure you receive a quality product, everything is baked fresh to order. <br/><br/>
                Orders require 48 hours to fulfill and will be made available on the next delivery date.<br/><br/>
                Flat fee of $10 for <a id="delivery" @click="deliveryLink"><u>Zero Emission Delivery.</u></a>
            </p>
        </div>
        <div class="checkout">
            <div>
                <p>Preferred Delivery Date: </p>
                <input type="checkbox" name="flexibleDelivery" id="flexibleDelivery" 
                v-model="flexibleDelivery" style="width: 30px; margin: 1rem;">
                <label for="flexibleDelivery">I'm flexible with the delivery date.</label><br/>
                <input type="date" name="delivery-date" v-model="deliveryDate" id="inputDate" 
                :disabled="flexibleDelivery" style="height: 2rem; margin-top: 1rem;">
                <div v-if="dateAlert" style="color: red;">
                    <p>Please select date above.</p>
                </div>
            </div>
            <div>
                <h4>Order info:</h4>
                <form>
                Email:<br/>
                <input type="text" v-model="email" placeholder="example@mail.com" class="text" required><br/><br/>
                Full Name:<br/>
                <input type="text" v-model="fullName" placeholder="e.g. Jane Doe" class="text" required><br/><br/>
                Delivery Address:<br/> <input type="text" v-model="address" placeholder="Number and Street" class="text" required><br/><br/>
                Postal Code:<br/> <input type="text" v-model="postalCode" placeholder="e.g. A1A 1A1" class="text" required><br/><br/>
                </form>
                <p>Total: ${{ (totalOrderRef/100).toFixed(2) }}</p>
            </div>
        
            <button class="place-order button" @click="placeOrder">Place Order</button>
            <button class="place-order red button" @click="cancelCheckout">Cancel Checkout</button>
            
        </div>
    </div>
    <div>
    </div>
    <img class="desc-logo" src="./assets/issho_logo.png"/>
</div>
</template>
<style scoped>

#flexibleDelivery{
    width: 40px;
}

.checkout{
    padding: 1rem;
    padding-right: 1rem;
    
}

#delivery{
    cursor: pointer;
}

.desc-logo{
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    width: 100px;
    height:auto;
}

.info{
    padding: 1rem;
}

#checkout{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

p{
    font-size: medium;
}

input.text{
    height: 2rem;
    width: 17rem;
}
.grid-container{
    margin: 2rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    padding-top: 10%;
}

.place-order:hover{
    background-color: var(--green-light);
}
.red:hover {
    background-color: rgb(223, 71, 71);
}
.place-order {
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
}

@media (max-width: 850px){
    .grid-container{
        grid-template-columns: 1fr;

    }

    .desc-logo{
        display: none;
    }
}
</style>