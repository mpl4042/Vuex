import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     cart: [],
    // Estado global da aplicação
  },

  mutations: {
    ADD_TO_CART(state, product) {
    state.cart.push(product);
  },
    // Mutations para modificar o estado
  },

  actions: {
    // Ações que irão disparar as mutations
     addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  
  getters: {
    // Getters para acessar o estado
     cartItemCount: state => {
    return state.cart.length;
  },

  }
}});
