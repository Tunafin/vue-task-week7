<template>
  <!-- 後臺導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/dashboard" class="nav-link">
        <img src="/Logo.png" alt="logo" height="40">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">產品列表</router-link>
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <ToastMessages></ToastMessages>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import ToastMessages from '@/components/dashboard/ToastMessages.vue';

const { VITE_APP_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    ToastMessages,
  },
  data() {
    return {
      status: false,
    };
  },
  methods: {
    logout() {
      const api = `${VITE_APP_URL}/logout`;
      this.$http.post(api)
        .then((response) => {
          this.$httpMessageState(response, '登出');
          if (response.data.success) {
            this.$router.push('/login');
          }
        }).catch((error) => {
          this.$httpMessageState(error.response, '錯誤訊息');
        });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${VITE_APP_URL}/v2/api/user/check`;
    this.$http.post(api)
      .then((response) => {
        this.$httpMessageState(response, '登入');
        this.status = true;
      }).catch((error) => {
        this.$router.push('/login');
        this.$httpMessageState(error.response, '錯誤訊息');
      });
  },
};
</script>

<style scoped>
</style>
