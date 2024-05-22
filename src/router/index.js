import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/welcome", name: "welcome", component: Welcome },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
