<script setup>
import { useTarefasStore } from "../stores/tarefas";

const store = useTarefasStore();
</script>

<template>
  <footer class="site-footer">
    <span>Feito para aprender, uma tarefa de cada vez.</span>
    <span>{{ store.total }} {{ store.total === 1 ? "tarefa" : "tarefas" }} na lista</span>
  </footer>
</template>
