<script>
import { ref, onMounted, computed } from 'vue'
import CryptoJS from 'crypto-js'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const products = ref([])
        const cloudURL = "https://api.cloudinary.com/v1_1/dy6sxilvq"
        const apiSecret = import.meta.env.VITE_CLOUDINARY_SECRET
        const fileInput = ref(null)
        const fileInputName = ref('')
        const status = ref('active')
        const activeProduct = ref('')

        const getImageURL =(publicId) => {
            return `https://res.cloudinary.com/dy6sxilvq/image/upload/issho/${publicId}`
        }

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
        onMounted(fetchProducts)
        

        const deleteImage = async (product) => {
            const publicId = product.img
                const timestamp = Math.round((new Date()).getTime() / 1000)
                const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
                const signature = CryptoJS.SHA1(signatureString)
                
                const formData = new FormData()
                formData.append("public_id", publicId)
                formData.append("api_key", "494449584914118")
                formData.append("timestamp", timestamp)
                formData.append("signature", signature)
                const imageResponse = await fetch(`${cloudURL}/image/destroy`, {
                    method: 'POST',
                    body: formData
                })

                return imageResponse
        }

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

                const imageDeleted = await deleteImage(product)
                
                if(imageDeleted.ok){
                    console.log("Image destroyed")
                } else{
                    console.error(imageDeleted.statusText)
                }
                

            } catch(error){
                console.log(error)
            }
            }
            
        }

        const updateFileInput = (event)=>{
            fileInput.value = event.target.files[0]
            fileInputName.value = event.target.files[0].name
            status.value = ''
        }

        const setActiveProduct = (id) => {
            activeProduct.value = id
        }

        const updateImage = async (product)=> {
            if(fileInput.value == null){
                status.value = "Choose file first."
                setActiveProduct(product._id)
                activeProduct.value = product._id
            } else{
            try{
                const imageDeleted = await deleteImage(product)
                if(imageDeleted.ok){
                    console.log("image destroyed")
                } else{
                    console.error(imageDeleted.statusText)
                }

                const formImage = new FormData()
                formImage.append("file", fileInput.value)
                formImage.append("upload_preset", "tngkldzn")

                const imageResponse = await fetch(`${cloudURL}/image/upload`, {
                    method: 'POST',
                    body: formImage
                    
                }
                )
                if(imageResponse.ok){
                    console.log("Image uploaded")
                } else{
                    console.error(imageResponse.statusText)
                }

                const productData = {
                    img: fileInputName.value
                }
                const idInput = product._id
                const url = `${backend}/api/products/${idInput}`
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':'bearer ' + localStorage.getItem('accessToken')
                    },
                    body: JSON.stringify(productData),
                });

                const data = await response.json();
                console.log(data);
                if(response.ok){
                    status.value = 'Product updated!'
                    fetchProducts()
                }
        

            }catch(error){
                console.log(error)
            }
            }
        }

    return {
        products, deleteProduct, backend, getImageURL, fileInput, updateImage,
         updateFileInput, status, setActiveProduct, activeProduct
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
            <div class="desc">
                <p v-html="product.desc"></p>
            </div>
            <div class="price grid-item">{{ (product.price/100).toFixed(2) }}</div>
            <div class="category grid-item">{{ product.category }}</div>
            <div class="img grid-item">
                <img class="product-photo" :src="getImageURL(product.img)" :alt="`${product.img}`"
                    style="width: 80px; padding: 0.5rem; display: flex;" />
                {{ product.img }}
                <p>Update image:</p>
                <input type="file" @change="updateFileInput">
                <button @click="updateImage(product)">Update</button><br>
                <p v-if="product._id === activeProduct">
                    {{ status }}
                </p>
            </div>
            <div class="id grid-item">{{ product._id }}</div>
            <div class="delete grid-item">
                <button class="delete-button" @click="deleteProduct(product)">Delete</button>
            </div>
        </div>
    </div>
</template>
<style scoped>

.desc{
    overflow-y: auto;
    height: auto;
    max-height: 300px;
    border-right: 1px solid lightslategray;
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
    overflow: auto;
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
    padding:0.5rem;
}
.delete-button:hover{
    background-color: red;  
}
</style>