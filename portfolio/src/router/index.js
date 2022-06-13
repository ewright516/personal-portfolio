import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Resume from "../views/Resume.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";

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
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
  ],
});

export default router;
