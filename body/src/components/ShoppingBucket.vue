<template>
  <div class="block py-4 sm:grid sm:grid-cols-5 my-16 sm:my-3">
    <div class="text-center sm:text-left">
      <img
        :src="bucketItem.image"
        alt="Product"
        :width="200"
        :height="200"
        class="object-contain"
      />
    </div>

    <div class="col-span-2 mx-5 mb-4 text-left sm:mb-0">
      <p class="my-3">{{ bucketItem.name }}</p>
      <div class="flex">
        <i
          v-for="(_, i) in bucketItem.rating"
          :key="i"
          class="fa fa-solid fa-star h-5 text-yellow-500"
        ></i>
      </div>
      <p class="text-xs my-2 line-clamp-3">
        {{ bucketItem.description }}
      </p>
      <span class="font-bold"> {{ bucketItem.price }} $ </span>
    </div>

    <div class="flex flex-col space-y-2 my-auto justify-self-end">
      <div class="flex justify-between xs:justify-start">
        <button class="bg-yellow-500 text-white px-4 py-2" @click="removeItemFromBasket(bucketItem)">
          <i class="fa fa-solid fa-minus"></i>
        </button>
        <div class="p-2 whitespace-normal">
          Quantity: <span class="font-bold">{{ bucketItem.quantity }}</span>
        </div>
        <button class="bg-yellow-500 text-white px-4 py-2" @click="addItemToBasket(bucketItem)">
          <i class="fa fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        class="bg-yellow-500 px-4 py-2"
        @click="removeGroupFromBasket(bucketItem)"
      >
        Remove from Basket
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingBucket",
  props: ["bucketItem", "removeGroupFromBasket","addItemToBasket","removeItemFromBasket"],
};
</script>
