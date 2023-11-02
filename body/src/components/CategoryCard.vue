<template>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 p-4 bg-gray-100 m-20"
  >
    <router-link
      v-for="(product, index) in products"
      :key="index"
      :to="'/product/' + product.name"
      class="bg-white p-4 flex flex-col items-center parent transition-colors duration-300"
    >
      <h2 class="text-xl font-bold">{{ product.name }}</h2>
      <div class="w-42 h-50 flex items-center justify-center my-3">
        <img
          :src="product.image"
          class="object-cover w-full h-full"
          alt="Product Image"
        />
      </div>
      <p class="text-[#007185] text-xs">See more</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",

  data() {
    return {
      products: [
        {
          name: "Electronics",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg",
        },
        {
          name: "For your Fitness Needs",

          price: "$149.99",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg",
        },
        {
          name: "Upgrade your office furniture",

          price: "$199.99",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_2X_Furnitrure_v2._SY608_CB577544739_.jpg",
        },
        {
          name: "Home & Kitchen",

          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_758x608_2X_en_US._SY608_CB609304299_.jpg",
        },
        {
          name: "Beauty picks",

          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg",
        },
        {
          name: "Health & Personal Care",

          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg",
        },
        {
          name: "Computers & Accessories",

          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg",
        },
        {
          name: "Toys",

          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_758x608_2X_en_US._SY608_CB609318944_.jpg",
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
