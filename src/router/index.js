import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RiddleView from '../views/RiddleView.vue';
import RiddleResultsView from '../views/RiddleResultsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/riddle', component: RiddleView },
  { path: '/riddle-results', component: RiddleResultsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;