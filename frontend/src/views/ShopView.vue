<script>
import ProductsViewC from '../components/ProductsViewC.vue'

export default {
  props: {
    viewCategoryView: String
  },
  setup(props){
    return props
  },
  components: {
    ProductsViewC
  }
}
</script>
<template>
    <div class="grid-container">
    <div class="shop-container">
        <ProductsViewC  :viewCategory="viewCategoryView"/>
    </div>
    </div>
</template>

<style scoped>
@media (min-width: 750){
.grid-container{
    display: grid;
    grid-template-columns: auto 1000px;
}
.shop-container{
    grid-column-start: 2;
}
}
</style>