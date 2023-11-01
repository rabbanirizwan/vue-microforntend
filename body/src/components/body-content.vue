<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1">
        <div class="bg-white p-4">
          <h2 class="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            <li class="mb-2 cursor-pointer">Electronics</li>
            <li class="mb-2 cursor-pointer">Books</li>
            <li class="mb-2 cursor-pointer">Clothing</li>
            <li class="mb-2 cursor-pointer">Home & Kitchen</li>
          </ul>
        </div>
      </div>
      <div class="col-span-3">
        <div class="bg-white p-4">
          <h2 class="text-lg font-semibold mb-4">Products</h2>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="bg-gray-100 p-4"
            >
              <img :src="product.image" alt="Product Image" class="mb-2" />
              <h3 class="text-md font-semibold">{{ product.name }}</h3>
              <p class="text-sm text-gray-700 mb-2">
                {{ product.description }}
              </p>
              <p class="text-lg font-bold text-gray-900">{{ product.price }}</p>
              <button class="bg-yellow-500 text-white px-4 py-2 mt-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyContent",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          description: "Description for Product 1",
          price: "$99.99",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Product 2",
          description: "Description for Product 2",
          price: "$149.99",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Product 3",
          description: "Description for Product 3",
          price: "$199.99",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>
