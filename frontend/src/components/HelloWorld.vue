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
  width: 240px;
  height: auto;
}

h3{
  font-weight: 300;
  text-align: center;
}
/* PC VIEW */
@media (min-width: 1024px) {
  .greetings  {
    text-align: left;
  }
}
</style>
