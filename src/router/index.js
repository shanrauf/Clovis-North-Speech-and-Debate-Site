import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const TournamentsView = () => import('@/views/TournamentsView.vue');
const CalendarView = () => import('@/views/CalendarView.vue');
const SponsorsView = () => import('@/views/SponsorsView.vue');
const DonateView = () => import('@/views/DonateView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const LoginView = () => import('@/views/LoginView.vue');
const AdminView = () => import('@/views/AdminView.vue');
const AdminAnalyticsView = () => import('@/views/AdminAnalyticsView.vue');
const AdminTournamentsView = () => import('@/views/AdminTournamentsView.vue');
const AdminAnnouncementsView = () =>
  import('@/views/AdminAnnouncementsView.vue');
const AdminHomeView = () => import('@/views/AdminHomeView.vue');

const routes = [
  {
    path: '/',
    meta: {
      name: 'Test Page',
      title: 'Test Page',
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
    path: '/calendar',
    meta: {
      name: 'Calendar Page',
      title: 'CN Forensics | Calendar',
      requiresAuth: true
    },
    component: CalendarView
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
    path: '/admin',
    meta: {
      name: 'Admin Page',
      title: 'Admin Page',
      requiresAuth: true
    },
    component: AdminView
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;
