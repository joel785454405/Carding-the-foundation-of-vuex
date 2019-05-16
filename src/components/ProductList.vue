<template>
  <div class="product-list">
    <ul>
      <li v-for="item in productList" :key="item.id">
        <span>{{item.title}}</span>/
        <span>{{item.price}}</span>/
        <span>{{item.inventory}}</span>
        <br>
        <button @click="addProducts(item)">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductList",
  computed: mapState({
    productList: state => state.product.all
  }),
  methods: mapActions("cart", ["addProducts"]),
  created() {
    this.$store.dispatch("product/getAllProducts");
  }
};
</script>

<style>
</style>
