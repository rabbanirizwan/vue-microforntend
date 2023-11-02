import Vue from "vue";
import VueRouter from "vue-router";
import BodyContent from "./components/Card.vue";
import CategoryCard from "./components/CategoryCard.vue";
import CartPage from "./views/Checkout/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CategoryCard },
  { path: "/about", component: BodyContent },
  { path: "/checkout", component: CartPage },
  //   { path: "/product/:id", component: BodyContent },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
