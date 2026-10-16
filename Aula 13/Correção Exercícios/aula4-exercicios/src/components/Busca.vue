<template>
  <input v-model="termo" placeholder="Buscar..." />
</template>

<script>
export default {
  data() {
    return { termo: "" };
  },
  watch: {
    termo(novoValor, valorAntigo) {
      console.log(`busca mudou de "${valorAntigo}" para "${novoValor}"`);
    }
  }
};
</script>