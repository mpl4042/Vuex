import Vue from 'vue';
import App from './app.vue';
import store from './store'; // Importando a store Vuex

new Vue({
  render: h => h(App),
  store, // Integrando a store ao Vue
}).$mount('#app');
