<script setup>
import ShopView from './views/ShopView.vue'
import {ref, onMounted, computed} from 'vue'

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

</script>
<template>
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
      <div v-if="showTab === 'honey'" class="scroll-tab">
        <ShopView viewCategoryView="honey" />
      </div>
    </div>
</template>
<style scoped>
.shop-view{
    width: 50vw;
    position: relative;
    left: 90%;
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
</style>