<template>
  <div class="cart">
    <ul>
      <li v-for="item in carts" :key="item.id">
        <span>{{item.title}}</span>/
        <span>{{item.price}}</span>/
        <span>{{item.quantity}}</span>
      </li>
    </ul>
    <button :disabled="carts.length<1" @click="settlement(carts)">结算</button>
    <div>{{checkStatus}}</div>
    <div>{{total}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState("cart", ["checkStatus"]),
    ...mapGetters("cart", {
      carts: "cartProduct",
      total: "totalPrice"
    })
  },
  methods: mapActions("cart", ["settlement"])
};
</script>

<style>
</style>
