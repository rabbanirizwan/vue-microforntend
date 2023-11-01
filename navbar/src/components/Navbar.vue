<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         
          <img alt="Vue logo" src="../assets/logo.png" class="w-12 h-12">
           <span class="font-semibold text-xl tracking-tight">zon</span>
        </div>
        <div class="block lg:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
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
              :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fill-rule="evenodd"
                d="M0 11l2-2 9 9 9-9-2-2-7 7-7-7-2 2z"
              />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
          :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
        >
          <div class="text-sm lg:flex-grow">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >Your Prime</a
            >
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >Today's Deals</a
            >
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
            >Gift Cards</a
            >
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
              >Sign in</a
            >
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    props: {
      msg: String,
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
  