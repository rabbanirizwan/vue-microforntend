import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    cart: [],
  },

  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addToCart(state, item) {
      const existingItem = state.cart.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },

    decrement(context) {
      context.commit("decrement");
    },
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
  },

  getters: {
    getCounter(state) {
      return state.counter;
    },
    cartItem: (state) => {
      return state.cart;
    },
  },
});

export default store;
