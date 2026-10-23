<template>
  <section>
    <h1>Detalhe da tarefa</h1>

    <p v-if="carregando">Carregando tarefa...</p>
    <p v-else-if="erro">{{ erro }}</p>
    <div v-else-if="tarefa">
      <p><strong>ID:</strong> {{ tarefa.id }}</p>
      <p><strong>Título:</strong> {{ tarefa.title }}</p>
      <p><strong>Status:</strong> {{ tarefa.completed ? "✅ Concluída" : "❌ Não concluída" }}</p>
    </div>
    <p v-else>Tarefa não encontrada</p>

    <button @click="voltar">Voltar para as tarefas</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tarefa: null,
      carregando: true,
      erro: null
    };
  },
  methods: {
    async buscarTarefa() {
      const id = this.$route.params.id;
      this.carregando = true;
      this.erro = null;

      try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!resposta.ok) {
          throw new Error("Tarefa não encontrada.");
        }

        this.tarefa = await resposta.json();
      } catch (erro) {
        this.erro = "Não foi possível carregar a tarefa.";
        this.tarefa = null;
        console.error(erro);
      } finally {
        this.carregando = false;
      }
    },
    voltar() {
      this.$router.push("/tarefas");
    }
  },
  created() {
    this.buscarTarefa();
  },
  watch: {
    "$route.params.id"() {
      this.buscarTarefa();
    }
  }
};
</script>