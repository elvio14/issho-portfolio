<script setup>
import ShopView from './views/ShopView.vue'
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'
import {BaseTransition, ref, watch, onMounted, computed} from 'vue'
import CartCounter from './components/CartCounter.vue'
import Checkout from './Checkout.vue'
import OrderPlaced from './components/OrderPlaced.vue'
import PlanetPopup from './components/popups/PlanetPopup.vue'
import AboutPopup from './components/popups/AboutPopup.vue'
import FaqPopup from './components/popups/FaqPopupC.vue'
import DeliveryPopup from './components/popups/DeliveryPopup.vue'
import AboutCoffee from './components/popups/AboutCoffee.vue'
import AboutHoney from './components/popups/AboutHoney.vue'
import AboutFlour from './components/popups/AboutFlour.vue'

const showCheckout = ref(false)

const showCart = ref(false)

const orderIsPlaced = ref(false)

const planetPopupRef = ref(false)

const aboutPopupRef = ref(false)

const faqPopupRef = ref(false)

const deliveryPopupRef = ref(false)

const showAbout = ref(false)

const aboutCoffeeRef = ref(false)

const aboutHoneyRef = ref(false)

const aboutFlourRef = ref(false)

const tabs = ref(null)

const showTab = ref('pastries')

onMounted(()=>{
  tabs.value = document.querySelectorAll('.shop-tab')
})

const activateTab = (id) => {
  tabs.value.forEach(tab => {
    tab.classList.remove('tab-active')
  })
  const activeTab = document.getElementById(`${id}`)
  if(activeTab){
    activeTab.classList.add('tab-active')
    showTab.value = `${id}`
  }
} 


watch(orderIsPlaced, (value)=>{
  showCheckout.value = !value
  showCart.value = false
})

watch(showCheckout, ()=>{
  showCart.value = false
})

const goToResources = ()=>{
  window.location.href = '../resources.html'
}

const closeAbout = ()=>{
    showAbout.value = false
}

</script>

<template>
<div class="root">
  <div id="backgroundContainer">
    <div class="header">
      <img alt="Issho Logo" class="logo" src="./assets/isshotemp.png" width="180" height="180" />

      <div class="wrapper">
        <HelloWorld />
      </div>
      <div class="nav-container">
        <nav>
          <button class="a-button" @click="planetPopupRef = true">1% for the Planet</button>
          <button class="a-button" @click="deliveryPopupRef = true">Delivery</button>
          <button class="a-button" @click="faqPopupRef = true">FAQ</button>
          <button class="a-button" @click="goToResources">Resources</button>
          <button class="a-button" @click="showAbout = !showAbout">About</button>
        </nav>
        <transition name="drop">
        <div v-if="showAbout">
          <div id="overlay" @click="closeAbout"></div>
          <div class="dropdown">  
            <a class="drop-item" href="#" @click="aboutFlourRef = true, showAbout = false">Our Flour</a>
            <a class="drop-item" href="#" @click="aboutCoffeeRef = true, showAbout = false">Coffee Program</a>
            <a class="drop-item" href="#" @click="aboutHoneyRef = true, showAbout = false">The Beekeepers</a>
            <a class="drop-item" href="#" @click="aboutPopupRef = true, showAbout = false">The Team</a>
          </div>
        </div>
        </transition>
      </div>
    </div>
    <div class="banner">
      <img class="cookie" src="./assets/cookieBanner.jpg">
      <h3>"Helping the planet, one cookie at a time." </h3>
    </div>
    
    
    <div v-if="planetPopupRef">
      <PlanetPopup @update:planet-popup="planetPopupRef = $event"/>
    </div>

    <div v-if="aboutCoffeeRef">
      <AboutCoffee @update:aboutCoffee-popup="aboutCoffeeRef = $event" />
    </div>

    <div v-if="aboutHoneyRef">
      <AboutHoney @update:aboutHoney-popup="aboutHoneyRef = $event" />
    </div>

    <div v-if="aboutFlourRef">
      <AboutFlour @update:aboutFlour-popup="aboutFlourRef = $event" />
    </div>

    <div v-if="aboutPopupRef">
      <AboutPopup @update:about-popup="aboutPopupRef = $event" />
    </div>

    <div v-if="deliveryPopupRef">
      <DeliveryPopup @update:delivery-popup="deliveryPopupRef = $event" />
    </div>

    <div v-if="faqPopupRef">
      <FaqPopup @update:faq-popup="faqPopupRef = $event"/>
    </div>

    <div class="shop-view">
      <div style="text-align: center;">
        <h2>Shop</h2>
        <button class="shop-tab a-button tab-active" id="pastries" @click="activateTab('pastries')">Pastries</button>
        <button class="shop-tab a-button" id="coffee" @click="activateTab('coffee')">Coffee</button>
        <button class="shop-tab a-button" id="honey" @click="activateTab('honey')">Honey</button>
      </div>
      <div v-if="showTab === 'pastries'" class="scroll-tab">
        <ShopView viewCategoryView="pastry" />
      </div>
      <div v-if="showTab === 'coffee'" class="scroll-tab">
        <ShopView viewCategoryView="coffee" />
      </div>
    </div>
    <div class="cart" v-if="showCart">
      <button class="cart-x" @click="showCart = false">X</button>
      <Cart @update:showCheckoutProp="showCheckout = $event"/>
    </div>
  </div>
    
  <div class="cart-button" @click="showCart = true">
      <svg  class="basket-bar" width="83" height="59" viewBox="0 0 83 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_13)">
        <circle class="bar-geometry" cx="36" cy="30" r="23" fill="white"/>
        <rect class="bar-geometry" x="36" y="7" width="52" height="46" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_2_13">
        <rect width="83" height="57" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <svg class="basket-button" width="50" height="39" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 18H5.5L13.5 39H40.5L48.5 18H36M17.5 18L25 5H28L36 18M17.5 18H36M19 31.5H34.5M26.5 34.5V22.5M13.5 24.5H40.5" stroke="#266B26" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
  </div>
  <div class="cart-counter">
      <CartCounter/>
  </div>
  <div class="checkoutView" v-if="showCheckout" >
    <Checkout @update:orderIsPlaced="orderIsPlaced = $event" 
              @update:showCheckoutProp="showCheckout = $event"
              @update:showDelivery="deliveryPopupRef = $event"/>
  </div>
  <div class="orderPlaced" v-if="orderIsPlaced" >
    <button class="close-order" @click="orderIsPlaced = false, showCheckout = false">x</button>
    <OrderPlaced :orderPlaced="orderIsPlaced"/>
  </div>

</div>
<div id="insta-div">
  <img id="insta-logo" src="./assets/instaLogo.png" alt="instagram logo">
  <a id="insta-handle" href="https://www.instagram.com/isshobakery/" target="_blank">@isshobakery</a>
</div>
</template>


<style scoped>
#insta-div{
  position: fixed;
  bottom: 1rem;
  left: 1rem;
}

#insta-handle{
  position: relative;
  bottom: 0.7rem;
}

#insta-logo{
  width: 2vw;
  height: auto;
  
}

#overlay{
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;
}

.drop-enter-active, .drop-leave-active {
  transition: all 300ms;
}
.drop-enter-from, .drop-leave-to {
  opacity: 0;
  height: 0;
}
.drop-enter-to, .drop-leave-from {
  opacity: 1;
  height: 200px;
}
.drop-item{
  color: white;
  cursor: pointer;
}
.dropdown{
  z-index: 2;
  padding: 0.5rem;
  background-color: var(--green-popup);
  color: white;
  display: grid;
  position: relative;
  width: 140px;
  grid-template-columns: 1fr;
  gap: 1rem;
  height: 200px;
  border-radius: 1rem;
}
.a-no-hover:hover{
  background-color: white;
  cursor: default;
}
.banner{
  text-align: center;
  max-width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
.cookie{
  margin-top: 10%;
  width: 100%;
  border-top-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
}
.a-button{
  background-color: white;
  color: black;
  border: none;
  margin-right: 1rem;
  padding : 1rem;
  cursor: pointer;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  border: 1px solid var(--green-popup);
  border-radius: 1rem;
}

.shop-tab{
  border-bottom: none;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
  
}
.tab-active{
  background-image: linear-gradient(var(--green-light), white) 
}
.close-order{
  position: absolute;
  top: 0;
  right: left;
  border: none;
  width: 40px;
  height: 40px;
  font-size: large;
}
.checkoutView, .cart, .orderPlaced{
  position: fixed;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 5px solid var(--green-popup);
  border-radius: 2rem;
  box-shadow: var(--popup-shadow);
  overflow: auto;
  scrollbar-width: none;
}

.checkoutView::-webkit-scrollbar{
  display: none;
}

.cart::-webkit-scrollbar{
  display: none;
}
.cart-counter{
  position: fixed;
  top: 6.4rem;
  right:35px;
}
.cart-x{
  color: black;
  position: absolute;
  font-size: large;
  border: none;
  background-color: white;
  border-bottom-right-radius: 1rem;
  left: 0px;
  width: 40px;
  height: 40px;
}
/* .cart{
  background-color: var(--green-popup);
  width: 75vw;
  height: 94vh;
  position: fixed;
  right: 8%;
  top: 4%;
  overflow: auto;
} */
.bar-geometry{
  fill: var(--green-light);
}
.basket-bar{
  position: fixed;
  top: 4rem;
  right: -5px;
}
.basket-button{
  position: fixed;
  top: 4.7rem;
  right: 5px;
  cursor: pointer;
}

nav {
    text-align: center;
    width: 100%;
    font-size: 18px;
    grid-row-start: 2;
  }


button:hover {
  background-color: var(--green-light);
}

/* MOBILE VIEW */
@media (max-width: 850px){

  nav button{
    margin: 0;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
  .cart{
    position: fixed;
    width: 95vw;
    height: 90vh;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  #backgroundContainer {
    margin: auto;
    display: grid;
    grid-template-rows: auto auto auto;
  }

  .header {
    display:grid;
    grid-template-rows: 1fr 1fr;
    line-height: 1.5;
    margin:auto;
    margin-top: 4rem;
    grid-row-start: 1;
  }

  .logo{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
  }


  .shop-view{
    display: block;
    grid-row-start: 3;
    padding-top: 1.5rem;
  }

  .dropdown{
    top: 0%;
    left: 0%;
    width: 43%;
  }
}

/* PC VIEW */
@media (min-width: 851px) {
  .scroll-tab{
  height: 80vh;
  overflow: auto;
  }

  #backgroundContainer{
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-template-rows: 300px auto;
    width: 100vw;
  }
  .shop-view{
    grid-column-start: 2;
    grid-row:1 / span 2;
    padding-top: 2rem;
  }

  .header {
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns:1fr 1fr;
    line-height: 1.5;
    grid-column-start: 1;
    margin-top:5%;
  }

  .logo {
    grid-row-start: 1;
    grid-column-start: 1;
    position: relative;
    left: 68%;
    transform: translateX(-50%);
  }

  .wrapper {
    grid-column-start: 2;
    margin-top: 0.7rem;
    position: relative;
    left: -5%;
  }

  .nav-container{
    grid-column: 1 / span 2 ;
    grid-row-start: 2;
    margin-top: 1rem;
  }

  .dropdown{
    left: 73.8%;
  }
}
</style>
