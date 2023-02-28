import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
