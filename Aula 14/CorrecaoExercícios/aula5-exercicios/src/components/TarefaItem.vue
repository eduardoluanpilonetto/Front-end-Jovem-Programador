<template>
  <li @click="abrirDetalhe">{{ texto }}</li>
</template>

<script>
export default {
  props: ["texto", "id"],
  methods: {
    abrirDetalhe() {
      this.$router.push("/tarefa/" + this.id);
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>