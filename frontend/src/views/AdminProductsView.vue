<script>
import { ref, onMounted } from 'vue'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const products = ref([])

        const fetchProducts = () => {
            fetch(`${backend}/api/products`)
            .then((response) => response.json())
            .then((data) => {
            products.value = data;
            })
            .catch((error) => {
                error.value = error.message;
            });
    }
        onMounted(fetchProducts);

        const deleteProduct = async (product)=> {
            const isConfirmed = window.confirm("Are you sure you want to delete this product? It will immediately reflect on the webstore.")

            if (isConfirmed){
                try{
                const productID = product._id
                const response = await fetch(`${backend}/api/products/${productID}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':'bearer ' + localStorage.getItem('accessToken')
                    }
                })

                if(response.ok){
                    const data = await response.json()
                    console.log(data)
                    fetchProducts()
                } else {
                    console.error("Error deleting product.", await response.text())
                }
                

            } catch(error){
                console.log(error)
            }
            }
            
        }

    return {
        products, deleteProduct, backend
    }
    }
}
</script>
<template>
    <div class="table">
        <div class="grid-header">
            <div class="header-item">Title</div>
            <div class="header-item">Description</div>
            <div class="header-item">Price</div>
            <div class="header-item">Category</div>
            <div class="header-item">Image</div>
            <div class="header-item">ID</div>
        </div>
            
        <div v-for="product in products" :key="product._id" class="grid-container">
            <div class="title grid-item">{{ product.title }}</div>
            <div class="desc grid-item">{{ product.desc }}</div>
            <div class="price grid-item">{{ (product.price/100).toFixed(2) }}</div>
            <div class="category grid-item">{{ product.category }}</div>
            <div class="img grid-item">
                <img :src="`${backend}/uploads/${product.img}`" style="width: 80px; padding: 0.5rem; display: flex;">
                {{ product.img }}</div>
            <div class="id grid-item">{{ product._id }}</div>
            <div class="delete grid-item">
                <button class="delete-button" @click="deleteProduct(product)">Delete</button>
            </div>
        </div>
    </div>
</template>
<style scoped>

.refresh{
    margin-left: 2rem;
}
.table{
    margin: 2rem;
    border: 1px solid lightslategray;
}
.grid-header{
    text-align: center;
    gap: 1rem;
    display: grid;
    grid-template-columns: 4fr 5fr 1fr 1fr 2fr 3fr 1fr;
    background-color:aquamarine;
    font-weight: 600;
}

.header-item{
    border-right: 1px solid slategray;
}
.grid-item{
    border-right: 1px solid lightslategray;
}
.grid-container{
    display: grid;
    grid-template-columns: 4fr 5fr 1fr 1fr 2fr 3fr 1fr;
    gap: 1rem;
    border-bottom: 1px solid lightslategray;
}
.delete{
    border: none;
    padding: 0.5rem;
    text-align: center;
}
.delete-button{
    background-color: lightcoral;
    cursor: pointer;
    padding:0.7rem;
}
.delete-button:hover{
    background-color: red;  
}
</style>