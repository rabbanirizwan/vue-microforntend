<template>
  <div class="grid grid-cols-4 grid-rows-2 gap-4 px-4">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="bg-red p-4 flex flex-col items-center parent transition-colors duration-300"
    >
      <h2 class="text-xl font-bold text-red-400">{{ product.name }}</h2>
      <img :src="product.image" class="my-3" />
      <p class="text-[#007185] text-xs">See more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  data() {
    return {
      products: [
        {
          name: "Product 1",
          description: "Description for Product 1",
          price: "$99.99",
          image: "https://via.placeholder.com/350",
        },
        {
          name: "Product 2",
          description: "Description for Product 2",
          price: "$149.99",
          image: "https://via.placeholder.com/350",
        },
        {
          name: "Product 3",
          description: "Description for Product 3",
          price: "$199.99",
          image: "https://via.placeholder.com/350",
        },
        {
          name: "Product 4",
          description: "Description for Product 4",
          price: "$19.99",
          image: "https://via.placeholder.com/350",
        },
      ],
    };
  },
};
</script>

<style>
.parent:hover > p {
  color: #ff9900;
}
</style>
