<template>
  <li @click="abrirDetalhe">
    <span>{{ tarefa.title }}</span>
    <span>{{ tarefa.completed ? "✅" : "❌" }}</span>
  </li>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: Object,
      required: true
    }
  },
  methods: {
    abrirDetalhe() {
      this.$router.push("/tarefa/" + this.tarefa.id);
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
</style>