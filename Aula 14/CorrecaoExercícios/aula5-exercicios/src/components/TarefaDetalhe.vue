<template>
  <h1>Detalhe da tarefa</h1>

  <p v-if="tarefa">{{ tarefa.texto }}</p>
  <p v-else>Tarefa não encontrada</p>

  <button @click="voltar">Voltar para as tarefas</button>
</template>

<script>
import { tarefas } from "../data/tarefas.js";

export default {
  computed: {
    tarefa() {
      const id = Number(this.$route.params.id);
      return tarefas.find((t) => t.id === id);
    }
  },
  methods: {
    voltar() {
      this.$router.push("/tarefas");
    }
  }
};
</script>