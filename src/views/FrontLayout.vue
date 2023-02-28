<template>
  <div class="container">
    <h1>這是前台</h1>
    <router-link to="/">首頁</router-link> |
    <router-link to="/about">關於</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  },
};
</script>

<style scoped>
</style>
