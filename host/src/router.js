import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import CategoryCard from "./components/CategoryCard.vue";
import CategoryCard from "body/CategoryCard.vue";
import CartPage from "body/ShoppingBucket.vue";
import Card from "body/Card.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CategoryCard },
  { path: "/detailCard", component: Card },
  { path: "/product/:id", component: Card },
  { path: "/checkout", component: CartPage },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
