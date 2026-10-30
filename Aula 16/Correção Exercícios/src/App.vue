<script setup>
import { watch } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useTarefasStore } from "./stores/tarefas";

const store = useTarefasStore();

watch(
  () => store.restantes,
  (restantes) => {
    if (restantes === 0 && store.total > 0) {
      console.log("Todas as tarefas foram concluídas!");
    }
  },
);
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main class="page-container">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
