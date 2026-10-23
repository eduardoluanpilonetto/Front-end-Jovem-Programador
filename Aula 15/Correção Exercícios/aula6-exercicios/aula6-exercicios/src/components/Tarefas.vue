<template>
  <section>
    <h1>Tarefas</h1>

    <p v-if="carregando">Carregando tarefas...</p>
    <p v-else-if="erro">{{ erro }}</p>

    <div v-else>
      <p>{{ tarefasConcluidas }} de 10 concluídas</p>

      <button @click="buscarTarefas" :disabled="carregando">
        Recarregar
      </button>

      <ul>
        <TarefaItem
          v-for="tarefa in tarefas.slice(0, 10)"
          :key="tarefa.id"
          :tarefa="tarefa"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import TarefaItem from "./TarefaItem.vue";

export default {
  components: { TarefaItem },
  data() {
    return {
      tarefas: [],
      carregando: true,
      erro: null
    };
  },
  computed: {
    tarefasConcluidas() {
      return this.tarefas.slice(0, 10).filter((tarefa) => tarefa.completed).length;
    }
  },
  methods: {
    async buscarTarefas() {
      this.carregando = true;
      this.erro = null;

      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar as tarefas.");
        }

        this.tarefas = await resposta.json();
      } catch (erro) {
        this.erro = "Não deu para carregar as tarefas.";
        console.error(erro);
      } finally {
        this.carregando = false;
      }
    }
  },
  created() {
    this.buscarTarefas();
  }
};
</script>