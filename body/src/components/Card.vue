<template>
  <div class="container mx-auto p-4">
    <div class="col-span-3">
      <div class="bg-white p-4">
        <h2 class="text-lg font-semibold mb-4">Products</h2>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-gray-100 p-4 flex flex-col text-center"
          >
            <img :src="product.image" alt="Product Image" class="mb-2" />
            <h3 class="text-md font-semibold">{{ product.name }}</h3>
            <p class="text-sm text-gray-700 mb-2">
              {{ product.description }}
            </p>
            <p class="text-lg font-bold text-gray-900">${{ product.price }}</p>
            <button
              @click="addTo(product)"
              class="bg-yellow-500 text-white px-4 py-2 mt-4"
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
  name: "BodyContent",

  methods: {
    addTo(product) {
      this.$store.commit("addToCart", product);
    },
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          description: "Description for Product 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "99.99",
          image: "https://via.placeholder.com/150",
          rating:3
        },
        
        {
          name: "Product 2",
          description: "Description for Product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "149.99",
          image: "https://via.placeholder.com/150",
          rating:5
        },
        {
          name: "Product 3",
          description: "Description for Product 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:3
        },
        {
          name: "Product 4",
          description: "Description for Product 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:2
        },
        {
          name: "Product 5",
          description: "Description for Product 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:1
        },
        {
          name: "Product 6",
          description: "Description for Product 6.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:5
        },
        {
          name: "Product 7",
          description: "Description for Product .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:2
        },
        {
          name: "Product 8",
          description: "Description for Product 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:2
        },
        {
          name: "Product 9",
          description: "Description for Product 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:4
        },
        {
          name: "Product 10",
          description: "Description for Product 3",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:1
        },
        {
          name: "Product 11",
          description: "Description for Product 3",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:5
        },
        {
          name: "Product 12",
          description: "Description for Product 3",
          price: "199.99",
          image: "https://via.placeholder.com/150",
          rating:4
        },
      ],
    };
  },
};
</script>
