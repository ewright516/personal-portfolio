import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Resume from "../views/Resume.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
  ],
});

export default router;
