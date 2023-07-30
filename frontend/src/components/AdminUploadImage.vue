<script>
import {ref} from 'vue'

export default {
    setup(){
        const backend = import.meta.env.VITE_BACKEND_URL
        const fileInput = ref(null)

        const uploadFiles = async () => {
            if (!fileInput.value) return

            const formData = new FormData();
            for(let i = 0; i < fileInput.value.files.length; i++){
                formData.append("files", fileInput.value.files[i])
            }
            
            try {
                const response = await fetch (`${backend}/uploads`, {
                    method: 'POST',
                    body: formData,
                })

                if(response.ok){
                    console.log("Files uploaded.")
                } else {
                    console.error(response.statusText)
                }
            } catch(error){
                console.log(error)
            }
        }

        return {
            fileInput, uploadFiles
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
        
    </div>
</template>