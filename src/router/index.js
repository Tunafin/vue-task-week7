import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Front',
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
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/OrdersView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  let title = 'Puzzle';

  if (to.path.includes('/dashboard')) {
    title += '後臺';
  }

  window.document.title = title;

  next();
});

export default router;
