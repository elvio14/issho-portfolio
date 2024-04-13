<script setup>
import { ref } from 'vue';

  const showAbout = ref(false)

  const openAbout = () => {
    showAbout.value = !showAbout.value
    const about = document.getElementById('about')
    if(about.classList[1] === 'about-open'){
      about.classList.remove('about-open')
      about.classList.add('hover')
    }else{
      about.classList.add('about-open')
      about.classList.remove('hover')
    }
  }

  const goToResources = ()=>{
    window.location.href = '../resources.html'
  }
</script>

<template>
  <div id="greetings">
    <img alt="Issho Logo" id="logo" src="../assets/isshotemp.png" />
    <img src="../assets/issho_logo.png" id="header-logo">
    <span id="tagline">Bakery, Chocolate, and Coffee.</span>
    <div id="nav">
          <div class="nav-item hover" id="about" @click="openAbout()"><span id="about-title">About</span>

              <span v-if="showAbout" class="about-item first-about-item"
                @click="$emit('show', 'about-flour')">Our Flour</span>
              <span v-if="showAbout">-</span>
              <span v-if="showAbout" class="about-item" 
                @click="$emit('show', 'about-coffee')">Coffee Program</span><span v-if="showAbout">-</span>
              <span v-if="showAbout" class="about-item"
                @click="$emit('show', 'about-honey')">The Beekeepers</span><span v-if="showAbout">-</span>
              <span v-if="showAbout" class="about-item"
                @click="$emit('show', 'about-team')">The Team</span>
          </div>
          <div class="nav-item hover" v-if="!showAbout" @click="goToResources()">Resources</div>
          <div class="nav-item hover" v-if="!showAbout" @click="$emit('show', 'faq')">FAQs</div>
      </div>
  </div>
</template>

<style scoped>
#greetings{
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 5fr 1fr 3fr;
  grid-row-gap: 0px;
}

#logo{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 10vw;
  grid-row: 1/3;
  
}

#header-logo{
  width: 15vw;
  height: auto;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding-left: 2rem; */
}


#tagline{
  grid-column: 2;
}

#nav{
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.nav-item{
  cursor: pointer;
  margin: auto;
  border: solid 1px;
  border-color: var(--green-popup);
  border-radius: 1rem;
  padding: 0.5rem;
  z-index: 0;
}

#about{
  z-index: 0;
}

.about-open {
  grid-column: 1 / 4;
}

.first-about-item{
  margin-left: 1rem;
}

.about-item {
  z-index: 1;
  font-size: smaller;
}

.about-item:hover{
  color: var(--green-popup);
}

.hover:hover {
  background-color: var(--green-light);
}


/* MOBILE */
@media (max-width: 850px) {
  #greetings{
    display: grid;
    grid-template-rows: 120px 60px 60px;
    margin-bottom: 2rem;
  }
  #logo{
    width: 35vw;
  }
  #header-logo{
    width: 35vw;
  }
}
</style>
