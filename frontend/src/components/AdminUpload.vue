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

        const submitForm = async () => {
            const productData = {
                id: id.value,
                title: title.value,
                desc: desc.value,
                price: price.value,
                category: category.value,
                img: img.value
            }

            try {
                const response = await fetch(`${backend}/api/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':'bearer ' + localStorage.getItem('accessToken')
                    },
                    body: JSON.stringify(productData),
                });

                const data = await response.json()
                console.log(data)
                
            } catch (error) {
                console.error('There was an error:', error)
            }
        }
        
    return {
        id, title, desc, price, category, img, submitForm
    }
}}
</script>
<template>
    <form
        @submit.prevent="submitForm">
            Title:          <br/><input     type="text" style="width: 200px;"   v-model="title" name="title" placeholder="title"><br/>
            Description:    <br/><textarea  rows="5" cols="50"                  v-model="desc" name="desc" placeholder="desc"></textarea><br/>
            Price (in cents)<br/><input     type="number"                       v-model="price" name="price" placeholder="price"><br/>
            Category        <br/><input     type="text"                         v-model="category" name="category" placeholder="category"><br/>
            Image Path (file-name.jpg)<br/><input     type="text"               v-model="img" name="img" placeholder="img"><br/>
            <button type="submit">Create Product</button>
    </form>
    
</template>