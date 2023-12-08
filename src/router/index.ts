import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DemoPage from '../views/DemoPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/demo', component: DemoPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;