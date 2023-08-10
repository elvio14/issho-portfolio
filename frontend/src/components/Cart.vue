<script>
import { useCartStore } from '../stores/cartStore';
import {storeToRefs} from 'pinia'
import {ref, computed, toRefs} from 'vue'
export default {
    setup(props, {emit}) {
        const store = useCartStore()
        const { items } = storeToRefs(store)


        const removeItem = (index) => {
            items.value.splice(index, 1)
        }
        const subtotal = computed(()=>
            items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
            )

        const total = subtotal.value + 1000
        const totalFixed = (total/100).toFixed(2)

        const setTotal = (total)=>{
            store.setOrderTotal(total)
        }
        const checkoutDirect =() => {
            emit('update:showCheckoutProp', true)
            setTotal(total)
        }
        
        return { items, removeItem, subtotal, checkoutDirect, total, totalFixed };
    },
}
</script>
<template>
    <div class="cart-container">
        <div v-for="(item, index) in items" :key="index" class="cart-grid">
            <div class="title">{{ item.title }}</div>
            <div class="price">${{ (item.price/100).toFixed(2) }}</div>
            <div class="quantity">x {{ item.quantity }}</div>
            <button class="remove-button" @click="removeItem(index)">Remove</button>
        </div>
        <div class="subtotal">
            <h3>Subtotal: ${{ (subtotal/100).toFixed(2) }}</h3>
            <h3>Delivery fee: $10.00</h3>
            <h3>Total: ${{ totalFixed }} </h3>
            <button class="checkout-button" @click="checkoutDirect">Checkout</button>
        </div>
    </div>
   

</template>
<style scoped>
button{
    color: black;
}
 .remove-button{
    border: none;
    height: 1.5rem;
    width: 5rem;
    color: rgb(130, 0, 0);
    font-weight: 800;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    cursor: pointer;
 }
.checkout-button{
    border: none;
    padding: 1rem;
    font-weight: 800;
    font-size: larger;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    cursor: pointer;
}
.checkout-button:hover{
    background-color: yellow;
}
.subtotal{
    margin-right:20%;
    text-align: right;
}

h3{
    margin-left: 10%;
    color: var(--color-text);
}
h4{
    margin-left: 70%;
    color: var(--color-text);
}
.cart-container{
    margin-top: 15%;
    padding: 2rem;
}

.cart-grid{
    padding: 1rem;
    display:grid;
    grid-template-columns: 4fr 1.5fr 1fr 1fr;
    color: var(--color-text)
}

</style>