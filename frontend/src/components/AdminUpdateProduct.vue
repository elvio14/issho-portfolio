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

        const updateProduct = async () => {
            const productData = {
                title: title.value,
                desc: desc.value,
                price: price.value,
                category: category.value,
                img: img.value
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
                
            } catch (error) {
                console.error('There was an error:', error)
            }
        }
        
    return {
        id, title, desc, price, category, img, updateProduct
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
    
</template>