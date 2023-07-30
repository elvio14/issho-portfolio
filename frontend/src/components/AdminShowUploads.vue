<script>
import {ref, onMounted} from 'vue'
export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const uploads = ref([])
        const getUploads = onMounted(async () => {
            try{
                const response = await fetch(`${backend}/uploaded-filenames`)
                const data = await response.json()
                console.log(data)
                uploads.value = data
            } catch(error) {
                console.log(error)
            }
        })

        return { 
            uploads, getUploads, backend
        }
    }
}
</script>
<template>
    <button @click="getUploads">Refetch Images</button>
    <div class="grid">
        <div v-for="upload in uploads" :key="upload" class="grid-item">
            <img :src="`${backend}/uploads/${upload}`"><br/>
            <p>{{ upload }}</p>
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