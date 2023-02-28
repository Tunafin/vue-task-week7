<template>
  <h2>產品詳細頁面</h2>
  <h3>{{ product.title }}</h3>
  <img :src="product.imageUrl" width="300">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;

      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style scoped>
</style>
