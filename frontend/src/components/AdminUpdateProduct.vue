<script>
import { ref } from 'vue';

export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const id = ref('')
        const title = ref('')
        const desc = ref('')
        const price = ref(null)
        const category = ref('')
        const img = ref('')
        const status = ref('')

        const updateProduct = async () => {
            status.value = 'updating...'
            const productData = {}
            if(title.value.length > 0){
                productData["title"] = title.value
            }
            if(desc.value.length > 0){
                productData["desc"] = desc.value
            }
            if(price.value !== null){
                productData["price"] = price.value
            }
            if(category.value.length > 0){
                productData["category"] = category.value
            }
            if(img.value.length > 0){
                productData["img"] = img.value
            }
            const idInput = id.value

            try {
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
                }
            } catch (error) {
                console.error('There was an error:', error)
            }
        }
        
    return {
        id, title, desc, price, category, img, updateProduct, status
    }
}}
</script>
<template>
    <form
        @submit.prevent="updateProduct">

            Product ID: (as reference) <br/><input     type="text" style="width: 200px;"   v-model="id" name="id" placeholder="id"><br/>
            Title:          <br/><input     type="text" style="width: 200px;"   v-model="title" name="title" placeholder="title"><br/>
            Description:    <br/><textarea  rows="5" cols="50"                  v-model="desc" name="desc" placeholder="desc"></textarea><br/>
            Price (in cents)<br/><input     type="number"                       v-model="price" name="price" placeholder="price"><br/>
            Category        <br/><input     type="text"                         v-model="category" name="category" placeholder="category"><br/>
            Image Path (file-name.jpg)<br/><input     type="text"               v-model="img" name="img" placeholder="img"><br/>
            <button type="submit">Update Product</button>
    </form>
    <div v-if="status">
        <h3>{{ status }}</h3>
    </div>
    
</template>