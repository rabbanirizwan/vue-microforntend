<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header :cartItems="totalItems"/>

    <router-view></router-view>
    <!-- <Card />
    <CategoryCard /> -->
    <!-- <Content/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CategoryCard from "body/CategoryCard.vue";
// import Card from "body/Card.vue";
import Header from "header/Header.vue";

// import Content from 'body/Content'

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    // CategoryCard,
    // Card,
    // Content
  },
  computed: {
    totalItems() {
      return this.$store.getters.cartItem.reduce((total,item)=>total+ item.quantity,0);
    }
  }
};
</script>


