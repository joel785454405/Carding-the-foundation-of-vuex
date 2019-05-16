<template>
  <div id="app">
    <div>物品列表↓</div>
    <hr>
    <ProductList/>
    <hr>
    <Cart/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    ProductList,
    Cart
  }
};
</script>

<style>
</style>
