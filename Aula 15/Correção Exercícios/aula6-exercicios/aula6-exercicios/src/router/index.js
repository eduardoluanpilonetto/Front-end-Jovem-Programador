import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Tarefas from "../components/Tarefas.vue";
import Sobre from "../components/Sobre.vue";
import TarefaDetalhe from "../components/TarefaDetalhe.vue";
import Usuarios from "../components/Usuarios.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tarefas", component: Tarefas },
  { path: "/usuarios", component: Usuarios },
  { path: "/sobre", component: Sobre },
  { path: "/tarefa/:id", component: TarefaDetalhe }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;