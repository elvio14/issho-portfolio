<script>
import { useCartStore } from '../stores/cartStore.js';
import {ref, computed} from 'vue'

export default {
setup(){
    const store = useCartStore();
    const counterColor = computed(() => {
        return store.itemsLength > 0 ? 'yellow' : 'red'
    })
    return {store, counterColor}
    }
}
</script>
<template>
    <div class="counter" :style="{backgroundColor: counterColor}">
        {{ store.itemsLength }}
    </div>
</template>
<style scoped>
    .counter{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 800;
        display: inline-block;
        padding: 1px 5px;
        border-radius: 50%;
    }


</style>