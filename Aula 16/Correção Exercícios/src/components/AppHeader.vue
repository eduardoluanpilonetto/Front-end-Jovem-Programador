<script setup>
import { useTarefasStore } from "../stores/tarefas";

const store = useTarefasStore();
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Vue na prática — início">
      <span class="brand-mark">V</span>
      <span>vue<span class="brand-accent">na prática</span></span>
    </RouterLink>

    <nav class="main-nav" aria-label="Navegação principal">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/tarefas">Tarefas</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>

    <RouterLink class="remaining-pill" to="/tarefas">
      <span class="status-dot"></span>
      {{ store.restantes }} restantes
    </RouterLink>
  </header>
</template>
