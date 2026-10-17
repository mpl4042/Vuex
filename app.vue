<template>
  <div id="app" style="padding: 20px; font-family: sans-serif;">
    <h1>Loja da Empresa Q</h1>
    
    <div style="background: #f4f4f4; padding: 10px; border-radius: 8px;">
      <h3>Resumo Rápido</h3>
      <p>Itens no carrinho: <strong>{{ cartItemCount }}</strong></p>
    </div>

    <hr />

    <div style="margin-top: 20px;">
      <button @click="testAddToCart" style="padding: 10px 20px; cursor: pointer; background: #42b983; color: white; border: none; border-radius: 5px;">
        Adicionar Produto de Teste
      </button>
    </div>

    <ShoppingCart />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ShoppingCart from './components/ShoppingCart.vue'; // Importação essencial

export default {
  name: 'App',
  components: {
    ShoppingCart // Registro essencial
  },
  computed: {
    ...mapGetters(['cartItemCount'])
  },
  methods: {
    ...mapActions(['addToCart']),

    testAddToCart() {
      const mockProduct = {
        id: Date.now(),
        name: "Produto " + (this.cartItemCount + 1),
        price: 99.90
      };
      this.addToCart(mockProduct);
    }
  }
}
</script>