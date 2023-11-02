import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import store from "body/store.js";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
