<script setup>
import AdminUpdateProduct from '../components/AdminUpdateProduct.vue'
import AdminUpload from '../components/AdminUpload.vue'
import AdminUploadImage from '../components/AdminUploadImage.vue'
import AdminShowUploads from '../components/AdminShowUploads.vue'
</script>
<template>
    <div class="grid-container">
        <div class="grid-item">
            <h4>Create new product</h4>
            <AdminUpload/>
        </div>
        <div class="grid-item">
            <h4>Update existing product</h4>
            <AdminUpdateProduct/>
        </div>
    </div>
</template>
<style scoped>
.grid-container{
    margin: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    gap:3rem;
}
</style>