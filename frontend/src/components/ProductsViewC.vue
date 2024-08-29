<script>
import { ref, reactive, onMounted, computed, getCurrentInstance } from 'vue'
import { useCartStore} from '../stores/cartStore.js'
import {cld} from '../main.js'

export default {
  props: {
    viewCategory: String,
  },
  setup(props) {
    const backend = import.meta.env.VITE_BACKEND_URL
    const products = ref([])
    const loading = ref(true)
    const error = ref(null);
    const showPopup = ref(false)
    const showButton = ref(false)
    const selectedDesc = ref('')
    const selectedTitle = ref('')
    const selectedImage = ref('')
    const selectedQuantity = ref(1)
    const selectedProduct = ref()
    let nonReactiveSelectedQuantity = 1;
    const store = useCartStore()
    const cartItems = ref(store.items)

    const getImageURL =(publicId) => {
      return `https://res.cloudinary.com/dy6sxilvq/image/upload/issho/${publicId}`
    }

    const togglePopup = (product) => {
      selectedDesc.value = product.desc
      selectedTitle.value = product.title
      selectedImage.value = product.img
      selectedProduct.value = product
      showPopup.value = !showPopup.value
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
      const sameItem = cartItems.value.find(item => item.title === product.title)

      if(sameItem !== undefined && nonReactiveSelectedQuantity > 0){
        sameItem.quantity += nonReactiveSelectedQuantity
        store.hasChanged = true
      } else
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

    const filteredProducts = computed(()=>{
      return products.value.filter(product => product.category.includes(props.viewCategory))
    })

    
    return {
      products,
      loading,
      error,
      showPopup,
      selectedDesc,
      selectedTitle,
      selectedQuantity,
      togglePopup,
      closeDiv,
      updateQuantity,
      addToCartButtonClicked,
      cartItems,
      showButton,
      triggerButton,
      backend,
      filteredProducts,
      getImageURL,
      selectedImage,
      selectedProduct
    };
  },
};
</script>
<template>    
    <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-grid-item" ref="productItems">
              <img class="product-photo" :src="getImageURL(product.img)" :alt="`${product.img}`" 
              @click="togglePopup(product)"
              />
              <div class="product-title">
                <h3>{{ product.title }}</h3><h4>${{ (product.price/100).toFixed(2) }}</h4>
              </div>
              
              <!-- <div class="add-to-cart">
                <input class="input-number" type="number" value="1" @input="updateQuantity">
                <button class="add-button" @click="addToCartButtonClicked(product)" >Add to Basket</button>
              </div> -->
        </div>
        <div v-if="showPopup">
          <div id="overlay" @click="closeDiv"></div>
          <div class="desc-container"  >
                <h3 class="desc-title">{{ selectedTitle }}</h3>
                <div class="scrollable">
                  <img class="product-photoP" :src="getImageURL(selectedImage)" :alt="`${selectedImage}`"/>
                  <p class="desc-content" v-html="selectedDesc"></p>
                </div>
                


                <img class="desc-logo" src="../assets/issho_logo_white.webp"/>

                <div class="add-to-cartP">
                  <input class="input-number" type="number" value="1" @input="updateQuantity">
                  <button class="add-button" @click="addToCartButtonClicked(selectedProduct)" >Add to Basket</button>
                </div>
          </div>
          
        </div>
    </div>
</template>
<style scoped>

.scrollable{
  overflow-y: auto;
  max-height: 48vh;
  scrollbar-width: none;
}

.scrollable::-webkit-scrollbar{
  width: 0;
  height: 0;
}

.add-to-cartP{
  border: 1px solid var(--green-popup);
  background-color: white;
  border-radius: 1rem;
  padding: 0.1rem;
  width: 12vw;
  position: fixed;
  left: 65vw;
  top: 75vh;
}

.desc-container{
  border-radius: 2rem;
}

#overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 25%;
  cursor: pointer;
  z-index: 1;
}

.product-title{
  height: 3.5rem;
}
.product-grid-item{
  margin-top: 2rem;
}
h3{
  margin-bottom: -1rem;
}
/* .add-to-cart{
  border: 1px solid var(--green-popup);
  border-radius: 1rem;
  padding: 0.1rem;
  width: 12vw;
  display: inline-block;
} */
.add-button{
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  position: relative;
  left:10%;
  color: var(--green-text);
  border: none;
  height: 2rem;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.5s ease;
  margin-right: 1.2rem;
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
  width: 15%;
  border: none;
  height: 2rem;
  background-color: none;
}
.product-photo, .product-photoP {
    border-radius: 2rem;
}


/* .x-button{
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
} */

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

  .scrollable{
    max-height: 60vh;
  }

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

.product-photoP{
  width: 44vw;
  height: 40vw;
  object-fit: cover;
}

.product-title{
    width: 44vw;
}

/* .add-to-cart{
  width: 40vw;
} */
.input-number{
  width: 8vw;
  margin-left: 0;
}

.add-button{
  left: 2%;
  font-size: 11px;
  margin-right: 0.1rem;
}
.add-button:active{
  background-color: red;

}
.desc-container{
    width: 95vw;
    height:85vh;
    overflow: auto;
    position: fixed;
    top: 53%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: var(--green-popup);
    box-shadow: var(--popup-shadow);
    z-index: 2;
}
.add-to-cartP{
  width: 45vw;
  left: 45%;
  top: 90%;
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

.product-photoP{
  width: 12vw;
  height: 12vw;
  object-fit: cover;
  position: relative;

}

.product-title{
    width: 12vw;
}

.desc-container{
    width: 30vw;
    height:75vh;
    overflow: auto;
    position: fixed;
    top: 10%;
    left: 50%;
    background-color: var(--green-popup);
    box-shadow: var(--popup-shadow);
    text-align: center;
    z-index: 2;
}

}


</style>