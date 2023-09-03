<script>
import {ref, onMounted} from 'vue'
import { v2 as cloudinary} from 'cloudinary'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const images = ref([])
        const getImages = onMounted(async () => {
            cloudinary.v2.api.resources_by_asset_folder("issho",
            {max_results: 100},
            function(error, result) {
                if (error){
                    console.log(error)
                } else {
                    images.value = result.resources
                }
            }

            )
        })

        return { 
            images, getImages, backend
        }
    }
}
</script>
<template>
    <button @click="getUploads">Refetch Images</button>
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