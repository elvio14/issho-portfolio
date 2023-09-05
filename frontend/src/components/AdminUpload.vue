<script>
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { ref, computed } from 'vue';

export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const id = ref('')
        const title = ref('')
        const desc = ref('')
        const price = ref(null)
        const category = ref('')
        const img = ref('')
        const fileInput = ref(null)
        const cloudURL = "https://api.cloudinary.com/v1_1/dy6sxilvq"

        const fileNameChanged = computed(()=>{
            if (fileInput.value.files && fileInput.value.files.length > 0){
                img.value = fileInput.value.files[0].name
                console.log(img.value)
            }
        })

        const submitForm = async () => {
            

            const productData = {
                id: id.value,
                title: title.value,
                desc: desc.value,
                price: price.value,
                category: category.value,
                img: img.value
            }

            const formImage = new FormData()
            formImage.append("file", fileInput.value.files[0])
            formImage.append("upload_preset", "tngkldzn")

            try {
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
        id, title, desc, price, category, img, submitForm, fileNameChanged, fileInput
    }
}}
</script>
<template>
    <form
        @submit.prevent="submitForm">
            Image:          <br/><input type="file" ref="fileInput" @change="fileNameChanged"><br>
            Title:          <br/><input     type="text" style="width: 200px;"   v-model="title" name="title" placeholder="title"><br/>
            Description:    <br/><textarea  rows="5" cols="50"                  v-model="desc" name="desc" placeholder="desc"></textarea><br/>
            Price (in cents)<br/><input     type="number"                       v-model="price" name="price" placeholder="price"><br/>
            Category (pastry / coffee)   <br/><input     type="text"                         v-model="category" name="category" placeholder="category"><br/>
            <button type="submit">Create Product</button>
    </form>
    
</template>