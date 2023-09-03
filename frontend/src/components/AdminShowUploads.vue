<script>
import {ref, onMounted} from 'vue'
import { v2 as cloudinary} from 'cloudinary'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const images = ref([])
        const getImages = onMounted(async () => {
            fetch(`${backend}/getimages`)
                .then(response => response.json())
                .then(data => {
                    images.value = data
                })
                .catch(error => {
                    console.error(error)
                })
        })

        return { 
            images, getImages, backend
        }
    }
}
</script>
<template>
    <button @click="getImages">Refetch Images</button>
    <div class="grid">
        <div v-for="image in images" :key="image" class="grid-item">
            <img :src="`https://res.cloudinary.com/dy6sxilvq/image/upload/v1693695612/issho/${image.public_id}`"><br/>
            <p>{{ image.public_id }}</p>
        </div>
    </div>
</template>
<style scoped>
img{
    width: 100px;
    height: auto;
}

.grid{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
}
</style>