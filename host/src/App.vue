<template>
  <div id="app">
    <Header :cartItems="totalItems"/>
    <router-view></router-view>
  </div>
</template>

<script>


import Header from "header/Header.vue";


export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    totalItems() {
      return this.$store.getters.cartItem.reduce((total,item)=>total+ item.quantity,0);
    }
  }
};
</script>


