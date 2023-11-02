<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-10">
      <div class="flex">
        <div class="w-1/2">
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div class="w-1/2 pl-8">
          <h1 class="text-3xl font-extrabold text-gray-900 mb-4">
            {{ product.title }}
          </h1>
          <div class="mb-4">
            <span class="text-3xl font-bold text-gray-900"
              >${{ product.price.toFixed(2) }}</span
            >
          </div>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            {{ product.description }}
          </p>

          <div>
            <button
              @click="addToCart"
              class="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      product: {
        title: "Product Title",
        price: 99.99,
        description: "Product Description",
        image: "https://via.placeholder.com/150", // Replace with the actual image URL
      },
    };
  },
  methods: {
    addToCart() {
      // Add to cart logic
    },
  },
};
</script>

<style>
/* Add custom styles here */
</style>
