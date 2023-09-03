<script>
import {ref, onMounted} from 'vue'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const images = ref([])
        const getUploads = onMounted(async () => {
            try{
                const response = await fetch(`${backend}/api/get-images`)
                const data = await response.json()
                images.value = data.resources
                images.array.forEach(image => {
                    const fileName = `${image.public_id}.${image.format}`
                console.log(fileName)
                
                });
            } catch(error) {
                console.log(error)
            }
        })

        return { 
            images, getUploads, backend
        }
    }
}
</script>
<template>
    <button @click="getUploads">Refetch Images</button>
    <div class="grid">
        <div v-for="image in images" :key="image" class="grid-item">
            <img :src="`https://res.cloudinary.com/dy6sxilvq/image/upload/v1693695612/issho/${image.public_id}`"><br/>
            <p>{{ image.fileName }}</p>
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