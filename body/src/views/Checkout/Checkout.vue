<template>
  <div
    class="flex justify-between flex-wrap max-w-screen-2xl mx-auto bg-gray-100 p-10"
  >
    <div class="flex flex-col p-5 space-y-50 bg-white shadow-md pr-3 flex-1">
      <h1 class="text-3xl border-b pb-4 text-left">
        {{
          getCartItem.length > 0
            ? "Shopping Basket"
            : "Your Amazon Basket is empty"
        }}
      </h1>
      <shopping-bucket
        v-for="(bucketItem, index) in getCartItem"
        :key="index"
        :bucketItem="bucketItem"
        :removeGroupFromBasket="removeGroupFromBasket"
        :removeItemFromBasket="removeItemFromBasket"
        :addItemToBasket="addItemToBasket"
      />
    </div>
    <div class="flex flex-col bg-white p-10 shadow-md">
      <h2 class="whitespace-nowrap">
        Subtotal ({{ totalItems }})
        <span className="font-bold">
          {{ calculateTotalPrice }}$
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
    removeItemFromBasket(bucketItem) {
       this.$store.commit("removeFromCart",bucketItem)
    },
    addItemToBasket(bucketItem) {
       this.$store.commit('addToCart',bucketItem)
    },
    removeGroupFromBasket(bucketItem) {
        console.log("bucketItem",bucketItem)
        this.$store.commit("removeGroup",bucketItem)
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
      return this.getCartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  data() {
    return {
      dummyData: [
        {
          image: "https://via.placeholder.com/150",
          name: "Dummy Product Title",
          rating: 4,
          description: "Lorem ipsum dolor sit amet.",
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

