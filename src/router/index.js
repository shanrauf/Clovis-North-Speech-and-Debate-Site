import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const TournamentsView = () => import('@/views/TournamentsView.vue');
import SponsorsView from '@/views/SponsorsView.vue';
const DonateView = () => import('@/views/DonateView.vue');
import ContactView from '@/views/ContactView.vue';
const LoginView = () => import('@/views/LoginView.vue');
const AdminView = () => import('@/views/AdminView.vue');
const RegisterView = () => import('@/views/RegisterView.vue');
const ErrorView = () => import('@/views/ErrorView.vue');

const routes = [
  {
    path: '/',
    meta: {
      name: 'CN Forensics | Home',
      title: 'CN Forensics | Home',
      requiresAuth: true
    },
    component: HomeView
  },
  {
    path: '/about',
    meta: {
      name: 'About Page',
      title: 'CN Forensics | About',
      requiresAuth: true
    },
    component: AboutView
  },
  {
    path: '/tournaments',
    meta: {
      name: 'Tournaments Page',
      title: 'CN Forensics | Tournaments',
      requiresAuth: true
    },
    component: TournamentsView
  },
  {
    path: '/sponsors',
    meta: {
      name: 'Sponsors Page',
      title: 'CN Forensics | Sponsors',
      requiresAuth: true
    },
    component: SponsorsView
  },
  {
    path: '/donate',
    meta: {
      name: 'Sponsors Page',
      title: 'CN Forensics | Sponsors',
      requiresAuth: true
    },
    component: DonateView
  },
  {
    path: '/contact',
    meta: {
      name: 'Contact Page',
      title: 'CN Forensics | Contact Us',
      requiresAuth: true
    },
    component: ContactView
  },
  {
    path: '/login',
    meta: {
      name: 'Login Page',
      title: 'Login Page',
      requiresAuth: true
    },
    component: LoginView
  },
  {
    path: '/register',
    meta: {
      name: 'Register Page',
      title: 'CN Forensics | Register',
      requiresAuth: true
    },
    component: RegisterView
  },
  {
    path: '/admin',
    meta: {
      name: 'Admin Page',
      title: 'Admin Page',
      requiresAuth: true
    },
    component: AdminView
  },
  {
    path: '*',
    meta: {
      name: 'Error Page',
      title: 'Error Page',
      requiresAuth: false
    },
    component: ErrorView
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;
