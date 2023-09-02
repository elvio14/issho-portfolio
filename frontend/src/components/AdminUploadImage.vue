<script>
import {ref} from 'vue'

export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const fileInput = ref(null)
        const showError = ref(false)
        const showComplete = ref(false)

        const uploadFiles = async () => {
            if (!fileInput.value) return

            const formData = new FormData();
            for(let i = 0; i < fileInput.value.files.length; i++){
                formData.append("files", fileInput.value.files[i])
            }
            
            try {
                const response = await fetch (`${backend}/upload`, {
                    method: 'POST',
                    body: formData,
                })

                if(response.ok){
                    console.log("Files uploaded.")
                    showComplete.value = true
                } else {
                    console.error(response.statusText)
                    showError.value = true
                }
            } catch(error){
                console.log(error)
            }
        }

        return {
            fileInput, uploadFiles, showComplete, showError
        }
    }
}
</script>
<template>
    <div>
        <form @submit.prevent="uploadFiles">
            <input type="file" ref="fileInput" multiple/>
            <button type="submit">Upload Image</button>
        </form>
        <div v-if="showError">
            <span>Upload to cloud error. Ask Andrew.</span>
        </div>
        <div v-if="showComplete">
            <span>Upload successful.</span>
        </div>
    </div>
</template>