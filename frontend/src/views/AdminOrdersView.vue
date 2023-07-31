<script>
import { ref, onMounted, computed } from 'vue'
export default {
    setup(){
        const orders = ref([])
        const backend = import.meta.env.VITE_BACKEND_URL

        const fetchOrders = () => {
            fetch(`${backend}/api/order`, {
                method: 'GET',
                headers: {
                        'Content-Type': 'application/json',
                        'token':'bearer ' + localStorage.getItem('accessToken')
                    }
            })
            .then((response) => response.json())
            .then((data) => {
            orders.value = data
            })
            .catch((error) => {
                error.value = error.message;
            });
        }

        onMounted(fetchOrders);
        
        const productsArray = orders.value.flatMap(order => 
            order.products.map(product => ({
                    title: product.title,
                    quantity: product.quantity
                })
            )
        )

        const convertedDate = (order) => {
            return new Date(order.createdAt)
        }

        const markAsPaid = async (order) => {
            try{
                const orderId = order._id
                const url = `${backend}/api/order/${orderId}`
                const response = await fetch (url, {
                    method: 'PUT',
                    headers: {
                            'Content-Type': 'application/json',
                            'token':'bearer ' + localStorage.getItem('accessToken')
                        },
                    body: JSON.stringify({
                        status: "paid"
                    })
                })
                const data = response.json()
                console.log(data)
                fetchOrders()
            }catch(error){
                console.log(error)
            }
            
        }
        
        const markAsUnpaid = async (order) => {
            try{
                const orderId = order._id
                const url = `${backend}/api/order/${orderId}`
                const response = await fetch (url, {
                    method: 'PUT',
                    headers: {
                            'Content-Type': 'application/json',
                            'token':'bearer ' + localStorage.getItem('accessToken')
                        },
                    body: JSON.stringify({
                        status: "unpaid"
                    })
                })
                const data = response.json()
                console.log(data)
                fetchOrders()
            }catch(error){
                console.log(error)
            }
            
        }
        
        const markAsDelivered = async (order) => {
            try{
                const orderId = order._id
                const url = `${backend}/api/order/${orderId}`
                const response = await fetch (url, {
                    method: 'PUT',
                    headers: {
                            'Content-Type': 'application/json',
                            'token':'bearer ' + localStorage.getItem('accessToken')
                        },
                    body: JSON.stringify({
                        status: "delivered"
                    })
                })
                const data = response.json()
                console.log(data)
                fetchOrders()
            }catch(error){
                console.log(error)
            }
            
        }

        const markAsPending = async (order) => {
            try{
                const orderId = order._id
                const url = `${backend}/api/order/${orderId}`
                const response = await fetch (url, {
                    method: 'PUT',
                    headers: {
                            'Content-Type': 'application/json',
                            'token':'bearer ' + localStorage.getItem('accessToken')
                        },
                    body: JSON.stringify({
                        status: "pending"
                    })
                })
                const data = response.json()
                console.log(data)
                fetchOrders()
            }catch(error){
                console.log(error)
            }
            
        }

    return {
        orders, productsArray, markAsPaid, markAsDelivered, markAsUnpaid, markAsPending, fetchOrders, convertedDate
    }
    }
}
</script>
<template>
    <button @click="fetchOrders" class="refetch">Refetch Data</button>
    <div class="table">
        <div class="header">
            <div class="header-item">ID</div>
            <div class="header-item">Name/Email</div>
            <div class="header-item">Address</div>
            <div class="header-item">Postal Code</div>
            <div class="header-item">Flexible?</div>
            <div class="header-item">Delivery Date</div>
            <div class="header-item">Order Items</div>
            <div class="header-item">Total</div>
            <div class="header-item">Status</div>

        </div>
        <div v-for="order in orders" :key="order._id" class="grid">
            <div class="grid-item">
                ID: <br/>
                {{ order._id.slice(-7) }}<br/>
                Created at: <br/>
                {{ convertedDate(order) }}
            </div>
            <div class="grid-item">{{ order.fullName }} <br/> {{ order.email }}</div>
            <div class="grid-item">{{ order.address }}</div>
            <div class="grid-item">{{ order.postalCode }}</div>
            <div class="grid-item">{{ order.flexibleDelivery }}</div>
            <div class="grid-item">{{ order.deliveryDate }}</div>
            <div class="grid-item">
                <ul>
                    <li v-for="product in order.products" :key="product._id">
                        {{ product.title }} - x {{ product.quantity }}
                    </li>
                </ul>
            </div>
            <div class="grid-item">${{ (order.total/100).toFixed(2) }}</div>
            <div class="grid-item" style="text-align: center;">
                <h3>{{ order.status }}</h3>
                <button @click="markAsPaid(order)">Mark as Paid</button>
                <button @click="markAsUnpaid(order)">Mark as Unpaid</button>
                <span style="text-align: center;"><p>-</p></span>
                <button @click="markAsDelivered(order)" >Mark as Delivered</button>
                <button @click="markAsPending(order)">Mark as Pending</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.refetch{
    position:absolute;
    right: 2rem;
}
.table{
    position: absolute;
    top: 20%;
    margin: 2rem;
}
.header-item{
    border: 1px solid lightslategray;
    padding: 0.5rem;
}
.header{
    display: grid;
    text-align: center;
    background-color:aquamarine;
    font-weight: 600;
    grid-template-columns:
    /* Created At */
    3fr
     /*Name  */
    2fr
    /* Address */
    3fr
    /* PostalCode */
    2fr
    /* Flexible Delivery */
    1fr
    /* deliveryDate */
    2fr
    /* Order Items */
    6fr
    /* Total */
    1fr
    /* Status */
    2fr;
}
.grid{
    display: grid;
    grid-template-columns:
    /* Created At */
    3fr
     /*Name  */
    2fr
    /* Address */
    3fr
    /* PostalCode */
    2fr
    /* Flexible Delivery */
    1fr
    /* deliveryDate */
    2fr
    /* Order Items */
    6fr
    /* Total */
    1fr
    /* Status */
    2fr;
}
.grid-item{
    border: 1px solid lightslategray;
    padding: 0.5rem;
}
</style>