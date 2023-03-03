<template>
  <div class="container mt-5">
    <LoadingOverlay :active="isLoading" :z-index="1060"></LoadingOverlay>
    <ToastMessages></ToastMessages>
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <div class="rounded p-1 mb-3 bg-secondary">
          <img src="/Logo_2.png" alt="logo">
        </div>
        <h1 class="h3 mb-3 font-weight-normal">後臺登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email"
            v-model="user.username" required autofocus />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control"
            v-model="user.password" placeholder="Password" required />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ToastMessages from '@/components/dashboard/ToastMessages.vue';

const { VITE_APP_URL } = import.meta.env;

export default {
  components: {
    ToastMessages,
  },
  data() {
    return {
      isLoading: false,
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${VITE_APP_URL}/v2/admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((response) => {
        const { token, expired } = response.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        this.isLoading = false;
        this.$router.push('/dashboard/orders');
      }).catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '登入');
      });
    },
  },
};
</script>
