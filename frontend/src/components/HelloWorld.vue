<script setup>
</script>

<template>
  <div class="greetings">
    <img src="../assets/issho_logo.png" class="header-logo">
    <h4>Bakery, Chocolate, and Coffee.</h4>
  </div>
</template>

<style scoped>
.greetings{
  text-align: center;
}

.header-logo{
  width: 15vw;
  height: auto;
  /* padding-left: 2rem; */
}

/* MOBILE */
@media (max-width: 850px) {
  .header-logo{
    width: 35vw;
  }
}
</style>
