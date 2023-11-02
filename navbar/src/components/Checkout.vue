<template>
  <router-link
    to="/checkout"
    class="relative link flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-100"
  >
    <span
      class="absolute top-0 left-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold text-sm"
    >
      {{ cartItems }}
    </span>

    <div class="pt-1">
      <i class="fa fa-solid fa-cart-plus text-[#42b983] text-3xl"></i>

      <p class="hidden md:inline font-extrabold md:text-sm mt-2 text-[#42b983]">
        Basket
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CheckOut",
  props: ["cartItems"],
};
</script>
