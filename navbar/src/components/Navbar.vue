<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <router-link
        to="/"
        class="flex items-center flex-shrink-0 text-white mr-6 border border-transparent hover:border-white cursor-pointer duration-100"
      >
        <img alt="Vue logo" src="../assets/logo.png" class="w-12 h-8" />
        <span class="font-semibold text-xl tracking-tight">zon</span>
      </router-link>

      <div class="block lg:hidden">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path
              fill-rule="evenodd"
              d="M0 4h20v2H0V4zm0 5h20v2H0V9zm0 5h20v2H0v-2z"
            />
          </svg>
          <svg
            class="fill-current h-3 w-3"
            :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path fill-rule="evenodd" d="M0 11l2-2 9 9 9-9-2-2-7 7-7-7-2 2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
      >
        <SearchBar />
        <div class="text-sm">
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 px-2 border border-transparent hover:border-white cursor-pointer duration-100"
            >Your Prime</a
          >
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 px-2 border border-transparent hover:border-white cursor-pointer duration-100"
            >Today's Deals</a
          >
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 px-2 border border-transparent hover:border-white cursor-pointer duration-100"
            >Gift Cards</a
          >
        </div>
        <div>
          <CheckOut :cartItems="cartItems" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import CheckOut from "./Checkout.vue";
export default {
  name: "NavBar",
  props: ["cartItems"],
  components: {
    SearchBar,
    CheckOut,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
