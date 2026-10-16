<script>
  import Saudacao from "./components/Saudacao.vue";
  import Contador from "./components/Contador.vue";
  import Busca from "./components/Busca.vue";
  import TarefaItem from "./components/TarefaItem.vue";

  export default {
    components: { Saudacao, Contador, TarefaItem  },
    data() {
      return {
        novaTarefa: "",
        tarefas: [
          { texto: "Estudar Vite", feita: false },
          { texto: "Revisar props", feita: true }
        ]
      };
    },
    computed: {
      faltam() {
        return this.tarefas.filter((t) => !t.feita).length;
      }
    },
    methods: {
      adicionar() {
        const texto = this.novaTarefa.trim();
        if (texto === "") return;
        this.tarefas.push({ texto, feita: false });
        this.novaTarefa = "";
      }
    }
  };
</script>

<template>
  <h1>Maria Silva</h1>
  <Saudacao nome="Ana" />
  <p>Este parágrafo não fica azul.</p>
  <Contador/>
  <Busca/>
  <div>
    <input
      v-model="novaTarefa"
      @keyup.enter="adicionar"
      placeholder="Nova tarefa"
    />
    <button @click="adicionar">Adicionar</button>

    <p>Faltam {{ faltam }} tarefa(s)</p>

    <ul>
      <TarefaItem
        v-for="(tarefa, i) in tarefas"
        :key="i"
        :texto="tarefa.texto"
        :feita="tarefa.feita"
        @marcar-feita="tarefa.feita = !tarefa.feita"
      />
    </ul>
  </div>
</template>