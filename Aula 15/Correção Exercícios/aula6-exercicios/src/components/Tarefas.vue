<template>
  <h1>Tarefas</h1>
   <ul>
    <TarefaItem
      v-for="tarefa in tarefas"
      :key="tarefa.id"
      :id="tarefa.id"
      :texto="tarefa.texto"
    />
  </ul>
</template>

<script>
    import { tarefas } from "../Data/Tarefas.js";
    import TarefaItem from "../components/TarefaItem.vue";

    export default {
    components: { TarefaItem },
    data() {
        return { tarefas };
    }
    };
</script>