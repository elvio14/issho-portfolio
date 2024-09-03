<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import AboutPopup from './components/popups/AboutPopup.vue'
import FaqPopup from './components/popups/FaqPopupC.vue'
import AboutCoffee from './components/popups/AboutCoffee.vue'
import AboutHoney from './components/popups/AboutHoney.vue'
import AboutFlour from './components/popups/AboutFlour.vue'
import FooterVue from './components/Footer.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {useHead} from '@vueuse/head'

const siteDesc = 
 `Bakeries were once used as a place of communal gathering.
  They were places to for loved ones and the community to mingle, to gossip, and to celebrate.
  They were, in essence, a place for togetherness.
  So in early 2020, ISSHO was born.  Located in Toronto, Ontario we are a local Canadian bakery
  that strives to use the best ingredients and practices in creating our artisanal bake goods.
  By combining ingredients from local purveyors and freshly milled flour, we create a delicious 
  product that is packed with flavor and loaded with nutrients.  We hope that by sharing our delicious 
  baked goods with you, you too can take on this idea of "issho" and create lasting memories with your loved ones.`

useHead({
  meta: [
    {
      name: `description`,
      content: siteDesc
    }
  ]
})

const popupShown = ref('')

const photos = [
  {src: '/IsshoBakery_ 47.webp', alt: 'Photo of caneles and coffee'},
  {src: '/IsshoBakery_ 50.webp', alt: 'Photo of canele making'},
  {src: '/martinYukaBrad.webp', alt: 'Photo of Martin and Yuka'},
  {src: '/IsshoBakery_ 25.webp', alt: 'Photo of pastries and coffee'},
  {src: '/cupsBrad.webp', alt: 'Photo Issho cups'},
  {src: '/IsshoBakery_ 34.webp', alt: 'Photo of cookies'},
  {src: '/IsshoBakery_ 53.webp', alt: 'Photo of Martin Yuka Standing'},
  {src: '/IsshoBakery_ 63.webp', alt: 'Photo of issho exterior'},
  {src: '/IsshoBakery_ 8.webp', alt: 'Photo of interior'},
  {src: '/IsshoBakery_ 11.webp', alt: 'Photo of espresso machine'},
  {src: '/IsshoBakery_ 16.webp', alt: 'Photo of pastries'},
  {src: '/IsshoBakery_ 35.webp', alt: 'Photo of sables'},
]

</script>

<template>
<div class="root">
  <div id="backgroundContainer">
    <div id="header">
      <HelloWorld @show="(page) => popupShown = page"/>
    </div>
    <div class="banner">
      <img class="cookie" src="/cookiebanner_edited1.webp">
      <h3>"Helping the planet, one cookie at a time." </h3>
    </div>

    <div v-if="popupShown == 'about-coffee'">
      <AboutCoffee @update:aboutCoffee-popup="popupShown = $event" />
    </div>

    <div v-if="popupShown == 'about-honey'">
      <AboutHoney @update:aboutHoney-popup="popupShown = $event" />
    </div>

    <div v-if="popupShown == 'about-flour'">
      <AboutFlour @update:aboutFlour-popup="popupShown = $event" />
    </div>

    <div v-if="popupShown == 'about-team'">
      <AboutPopup @update:about-popup="popupShown = $event" />
    </div>

    <div v-if="popupShown == 'faq'">
      <FaqPopup @update:faq-popup="popupShown = $event"/>
    </div>
    <div class="shop-view">
      <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" :transition="600">
        <Slide v-for="(photo, index) in photos" :key="index">
          <img :src="photo.src" :alt="photo.alt" class="car-photo">
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
  <FooterVue />
</div>

</template>


<style scoped>

.car-photo{
  object-fit: cover;
  width: 38vw;
  height: 60vh;
  border-radius: 3rem;
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
  padding : 0.8rem;
  cursor: pointer;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
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

#header {
  position: relative;
  left: 4rem;
  top: 2rem;
  width: 65%;
}

/* MOBILE VIEW */
@media (max-width: 850px){
  .car-photo{
    width: 100%;
  }

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
    grid-template-rows: auto auto auto auto;
  }

  .header {
    margin-left: 4rem;
    line-height: 1.5;
    margin-top: 4rem;
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
  }
  .shop-view{
    grid-column-start: 2;
    grid-row:1 / span 2;
    padding-top: 2rem;
    margin-top: 3rem;
  }

  .logo {
    grid-row-start: 1;
    grid-column-start: 1;
    position: relative;
    left: 68%;
    transform: translateX(-50%);
    width: 12vw;
  }

  .nav-container{
    grid-column: 1 / span 2 ;
    grid-row-start: 2;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
  }

  .nav-item{
    text-align: center;
    cursor: pointer;
  }
}
</style>
