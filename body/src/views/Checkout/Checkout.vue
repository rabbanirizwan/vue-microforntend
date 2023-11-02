<template>
  <div class="lg:flex max-w-screen-2xl mx-auto bg-gray-100 m-4">
    <div class="flex flex-col p-5 space-y-50 bg-white shadow-md m-5">
      <h1 class="text-3xl border-b pb-4 text-left">Shopping Basket</h1>
      <shopping-bucket
        v-for="(bucketItem, index) in dummyData"
        :key="index"
        :bucketItem="bucketItem"
      />
    </div>
    <div class="flex flex-col bg-white p-10 shadow-md flex-1">
      <h2 class="whitespace-nowrap">
        Subtotal ({{totalItems}})
        <span className="font-bold">
            {{calculateTotalPrice}}$
          <!-- <Currency quantity={total * 71} currency="INR" /> -->
        </span>
      </h2>

      <button role="link" class="bg-slate-500 p-4 rounded">
        Sign in to checkout 
      </button>
    </div>
  </div>
</template>

<script>
import shoppingBucket from "../../components/ShoppingBucket.vue";
export default {
  components: { shoppingBucket },
  name: "CartPage",
  methods: {
    removeItemFromBasket() {
      // Remove item logic
    },
    addItemToBasket() {
      // Add item logic
    },
    removeGroupFromBasket() {
      // Remove group logic
    },
   
  },
  computed: {
    getCartItem() {
      return this.$store.getters.cartItem;
    },
    totalItems() {
      return this.getCartItem.reduce((total, item) => total + item.quantity, 0);
    },
    calculateTotalPrice() {
      return this.getCartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  data() {
    return {
      dummyData: [
        {
          image: "https://via.placeholder.com/150",
          name: "Dummy Product Title",
          rating: 4,
          description:
            "Lorem ipsum dolor sit amet.",
          price: 10,
          quantity: 1,
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Dummy Product Title 2",
          rating: 2,
          description: "Lorem ",
          price: 100,
          quantity: 2,
        },
      ],
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
