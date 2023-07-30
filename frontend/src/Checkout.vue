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
        return { formattedDate, flexibleDelivery, deliveryDate, fullName, address, postalCode, placeOrder, cancelCheckout, email };
    }
}
</script>
<template>
<div class="root">
    <div style="margin-left: 2rem;">
        <h3>Checkout</h3>
    </div>
    <div class="grid-container">
        <div class="info">
            <p>
                To ensure you receive a quality product, everything is baked fresh to order. <br/>
                Orders require 48 hours to fulfill and will be made available on the next delivery date.<br/>
                We have changed our delivery policy to be more customer friendly.<br/>
                There will be free shipping on orders that have a flexible delivery date.<br/>
                We'll group your order with others in the neighborhood.
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
        
            <button class="place-order" @click="placeOrder">Place Order</button>
            <button class="place-order red" @click="cancelCheckout">Cancel Checkout</button>
        </div>
    </div>
    <div>
    </div>
</div>
</template>
<style scoped>

p{
    font-size: small;
}

input.text{
    height: 2rem;
    width: 17rem;
}
.grid-container{
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    padding: 1rem;
    font-weight: 800;
    font-size: medium;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    cursor: pointer;
}

@media (max-width: 850px){
    .grid-container{
        grid-template-columns: 1fr;

    }
}
</style>