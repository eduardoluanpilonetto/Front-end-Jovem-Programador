import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tarefas from "../views/Tarefas.vue";
import Sobre from "../views/Sobre.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "inicio", component: Home },
    { path: "/tarefas", name: "tarefas", component: Tarefas },
    { path: "/sobre", name: "sobre", component: Sobre },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
