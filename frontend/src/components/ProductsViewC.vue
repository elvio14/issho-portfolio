<script>
import { ref, reactive, onMounted, computed } from 'vue'
import { useCartStore} from '../stores/cartStore.js'

export default {
  setup() {
    const backend = import.meta.env.VITE_BACKEND_URL
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const showPopup = ref(false);
    const showButton = ref(false)
    const selectedDesc = ref('');
    const selectedTitle = ref('');
    const top = ref('');
    const right = ref('');
    const selectedQuantity = ref(1);
    let nonReactiveSelectedQuantity = 1;
    const store = useCartStore()
    const cartItems = ref(store.items)

    const togglePopup = (product) => {
      selectedDesc.value = product.desc;
      selectedTitle.value = product.title;
      showPopup.value = !showPopup.value;
    };

    const triggerButton = ()=>{
      showButton.value = !showButton.value
    }

    const closeDiv = () => {
      showPopup.value = !showPopup.value;
    };

    const updateQuantity = (event) => {
      selectedQuantity.value = parseInt(event.target.value);
      nonReactiveSelectedQuantity = selectedQuantity.value
    };
    //PINIA
    const addToCartButtonClicked = (product) => {
      const newItem = {
        title: product.title,
        price: product.price,
        quantity: nonReactiveSelectedQuantity
      }
      if(nonReactiveSelectedQuantity > 0){
        cartItems.value.push(newItem)
        store.hasChanged = true
      }

      nonReactiveSelectedQuantity = 1

    };

    onMounted(() => {
      fetch(`${backend}/api/products`)
        .then((response) => response.json())
        .then((data) => {
          products.value = data;
          loading.value = false;
        })
        .catch((error) => {
          error.value = error.message;
          loading.value = false;
        });
    });

    
    return {
      products,
      loading,
      error,
      showPopup,
      selectedDesc,
      selectedTitle,
      top,
      right,
      selectedQuantity,
      togglePopup,
      closeDiv,
      updateQuantity,
      addToCartButtonClicked,
      cartItems,
      showButton,
      triggerButton,
      backend
    };
  },
};
</script>
<template>    
    <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-grid-item" ref="productItems">
              <img class="product-photo" :src="`${backend}/uploads/${product.img}`" @click="togglePopup(product)" />
              <div class="product-title">
                <h3>{{ product.title }}</h3>
                <h4>${{ (product.price/100).toFixed(2) }}</h4>
              </div>
              <div class="add-to-cart">
                <input class="input-number" type="number" value="1" @input="updateQuantity">
                <button class="add-button" @click="addToCartButtonClicked(product)" >Add to Basket</button>
              </div>
        </div>
        <div class="desc-container" v-if="showPopup" >
                <button @click="closeDiv" class="x-button">X</button>
                <h3 class="desc-title">{{ selectedTitle }}</h3>
                <p class="desc-content">{{selectedDesc}}</p>
                <img class="desc-logo" src="../assets/issho_logo_white.png"/>
        </div>
        
    </div>
</template>
<style scoped>

.product-title{
  height: 4.5rem;
  text-align: center;
  margin-bottom: 1rem;
}
.product-grid-item{
  margin-top: 2rem;
}
h3{
  margin-bottom: -1rem;
}
.add-to-cart{
  border: 1px solid var(--green-popup);
  border-radius: 1rem;
  padding: 0.1rem;
  width: 12vw;
  display: inline-block;
}
.add-button{
  font-weight: 600;
  position: relative;
  max-width: 30rem;
  left:10%;
  color: var(--green-text);
  border: none;
  height: 2rem;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.5s ease;
}

.add-button:hover{
  color: orange;
  
}
.add-button:active{
  background-color: red;
}
.input-number{
  text-align: center;
  margin-left: 1rem;
  width: 20%;
  border: none;
  height: 2rem;
  background-color: none;
}
.product-photo {
    border-radius: 2rem;
}


.x-button{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: white;
    color: black;
    border: none;
    cursor:pointer;
    font-weight: 1000;
}

p {
    margin: auto;
    padding: 2rem;
    color: white;
}

.desc-title{
    padding: 2rem;
    color: white;
}

.desc-logo{
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    width: 80px;
    height:auto;
}
/* MOBILE VIEW */
@media (max-width: 850px){

.product-grid-item{
  margin-top: 4.5rem;
}
.product-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin:auto;
    text-align: center;
}

.product-photo{
    width: 44vw;
    height: 40vw;
    object-fit: cover;
    cursor: pointer;
}

.product-title{
    width: 44vw;
}
.desc-container{
    position: relative;
    width: 95vw;
    height: 90vh;
    overflow: auto;
}

.add-to-cart{
  width: 40vw;
}
.input-number{
  width: 8vw;
  margin-left: -0.5rem;
}

.add-button{
  left: 7%;
}
.add-button:active{
  background-color: red;

}
.desc-container{
    width: 95vw;
    height:85vh;
    overflow: auto;
    position: fixed;
    top: 8%;
    background-color: var(--green-popup);
    box-shadow: var(--popup-shadow);
}
}

/* PC VIEW */
@media (min-width: 851px){

.product-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding-bottom: 3rem;
}

.product-photo{
    width: 12vw;
    height: 12vw;
    object-fit: cover;
    cursor: pointer;
}
.product-title{
    width: 12vw;
}

.desc-container{
    width: 30vw;
    height:35vw;
    overflow: auto;
    position: fixed;
    top: 10%;
    left: 50%;
    background-color: var(--green-popup);
    box-shadow: var(--popup-shadow);
}

}


</style>