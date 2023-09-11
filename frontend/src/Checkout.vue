<script>
import { useCartStore } from './stores/cartStore'
import {storeToRefs} from 'pinia'
import {ref, computed, toRefs} from 'vue'

export default {
    setup(props, {emit}) {
        const backend = import.meta.env.VITE_BACKEND_URL
        const flexibleDelivery = ref(false);
        const deliveryDate = ref();
        const fullName = ref('');
        const address = ref('');
        const postalCode = ref('');
        const email = ref('')

        const store = useCartStore();
        const { items } = storeToRefs(store);
        const {storeOrderTotal} = storeToRefs(store)

        const productsInItems = items.value.map(item => ({
            title: item.title,
            quantity: item.quantity
        }));
        let currentDate = new Date();
        let formattedDate = currentDate.toISOString();

        const placeOrder = async () => {
            const total = storeOrderTotal.value;
            const orderData = {
                products: productsInItems,
                total: total,
                email: email.value,
                fullName: fullName.value,
                flexibleDelivery: flexibleDelivery.value,
                deliveryDate: deliveryDate.value,
                address: address.value,
                postalCode: postalCode.value,
                status: "pending",
            };
            try {
                const response = await fetch(`${backend}/api/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });
                const data = await response.json()
                console.log(data)
                emit('update:orderIsPlaced', true)
            }
            catch (error) {
                console.log(error);
            }
        };

        const cancelCheckout = () => {
            emit('update:showCheckoutProp', false)
        }

        const deliveryLink = () => {
            emit('update:showCheckoutProp', false)
            emit('update:showDelivery', true)
        }

        return { formattedDate, flexibleDelivery, deliveryDate, 
            fullName, address, postalCode, placeOrder, cancelCheckout, email, deliveryLink };
    }
}
</script>
<template>
<div class="root">
    <div id="checkout">
            <h3>CHECKOUT</h3>
    </div>
    <div class="grid-container">
        
        <div class="info">
            <p>
                To ensure you receive a quality product, everything is baked fresh to order. <br/>
                Orders require 48 hours to fulfill and will be made available on the next delivery date.<br/>
                Flat fee of $10 for <a id="delivery" @click="deliveryLink"><u>Zero Emission Delivery.</u></a>Zero Emission Delivery.
            </p>
        </div>
        <div class="checkout">
            <div>
                <h4>Preferred Delivery Date: </h4>
                <input type="checkbox" name="flexibleDelivery" id="flexibleDelivery" 
                v-model="flexibleDelivery" style="width: 30px; margin: 1rem;">
                <label for="flexibleDelivery">I'm flexible with the delivery date.</label><br/>
                <input type="date" name="delivery-date" v-model="deliveryDate" id="inputDate" 
                :disabled="flexibleDelivery" style="height: 2rem; margin-top: 1rem;">
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
            </div>
        
            <button class="place-order button" @click="placeOrder">Place Order</button>
            <button class="place-order red button" @click="cancelCheckout">Cancel Checkout</button>
            <img class="desc-logo" src="./assets/issho_logo.png"/>
        </div>
    </div>
    <div>
    </div>
</div>
</template>
<style scoped>

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
}
</style>