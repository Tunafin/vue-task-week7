import { createApp } from 'vue';
import { createPinia } from 'pinia';

import LoadingOverlay from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import $httpMessageState from '@/methods/pushMessageState';

import './assets/all.scss';
import App from './App.vue';
import router from './router';
import { date, currency } from './methods/filters';

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
};

app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(pinia);
app.use(VueAxios, axios);
app.use(router);

app.component('LoadingOverlay', LoadingOverlay);
// app.component('Form', Form);
// app.component('Field', Field);
// app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
