<template>
  <div id="app">
    <!-- <div class="flex flex-col p-5 space-y-50 bg-white">
        <h1 class="text-3xl border-b pb-4 text-left">Shopping Basket</h1> -->

    <!-- </div> -->

    <!-- <body-content msg="Welcome to Your Vue.js App" /> -->
    <!-- <body-content-two /> -->
    <!-- <category-card/>
     <carousel/> -->
    <router-view></router-view>
    <CartPage/>
  </div>
</template>

<script>
// import BodyContent from "./components/body-content.vue";
// import BodyContentTwo from "./components/body-content-two.vue";
// import CategoryCard from './components/CategoryCard.vue'
// import Carousel from './components/Carousel.vue'
// import ProductDetail from './components/ProductDetail.vue'
import CartPage from "./views/Checkout/Checkout.vue";

export default {
  name: "App",
  components: {
    CartPage,

    // BodyContent,
    // BodyContentTwo,
    // CategoryCard,
    // Carousel
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
