import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const TestView = () => import('@/views/TestView.vue');

const routes = [
  {
    path: '/',
    meta: {
      name: 'Test Page',
      title: 'Test Page',
      requiresAuth: true
    },
    component: TestView
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;
