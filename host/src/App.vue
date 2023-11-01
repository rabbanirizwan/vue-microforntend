<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CategoryCard />
    <!-- <Content/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CategoryCard from "body/CategoryCard.vue";
// import Content from 'body/Content'

export default {
  name: "App",
  components: {
    // HelloWorld,
    CategoryCard,
    // Content
  },
};
</script>

<style></style>
