<template>
  <h2>產品列表</h2>
  <table class="table">
    <tbody>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl" width="200"></td>
        <td>{{ product.title }}</td>
        <td><router-link :to="`/product/${product.id}`">詳細資料</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
</style>
