<template>
  <div id="app">
    <!-- <body-content msg="Welcome to Your Vue.js App" /> -->
    <!-- <body-content-two /> -->
     <category-card/>
  </div>
</template>

<script>
// import BodyContent from "./components/body-content.vue";
// import BodyContentTwo from "./components/body-content-two.vue";
import CategoryCard from './components/CategoryCard.vue'

export default {
  name: "App",
  components: {
    // BodyContent,
    // BodyContentTwo,
    CategoryCard
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
