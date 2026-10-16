<template>
  <p>Olá, {{ nome }}!</p>
</template>

<style scoped>
    p {
        color: blue;
    }
</style>

<script>
    export default {
        props: ["nome"]
    };
</script>