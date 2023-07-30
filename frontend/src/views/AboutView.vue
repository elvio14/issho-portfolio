<script setup>
import HomePage from '../components/HomePage.vue';
import PlanetTriggerC from '../components/PlanetTriggerC.vue'
import AboutTrigger from '../components/AboutTrigger.vue'
</script>

<template>
  <div class="about">
    <div>
      <AboutTrigger/>
    </div>
    <div>
      <PlanetTriggerC />
    </div>
  </div>
</template>

<style>
@media (min-width: 851px) {
  .about {
    display: relative;
    align-content: center;
  }
}
</style>

