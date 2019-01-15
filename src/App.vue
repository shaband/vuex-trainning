<template>
  <div id="app">

    <products-one ></products-one>
    <products-two ></products-two>
  </div>
</template>
<script>

import productsOne from './components/productsOne.vue';
import productsTwo from './components/productsTwo.vue';
  export default {
    name: 'app',
    components: {'products-one':productsOne, 'products-two':productsTwo},
    data() {
      return {}
    },

  }
</script>
<style scoped>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
