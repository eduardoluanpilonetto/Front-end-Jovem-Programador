<template>
  <section>
    <h1>Usuários</h1>

    <p v-if="carregando">Carregando usuários...</p>
    <p v-else-if="erro">{{ erro }}</p>

    <ul v-else>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <strong>{{ usuario.name }}</strong>
        <p>{{ usuario.email }}</p>
        <p>{{ usuario.address.city }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      carregando: true,
      erro: null
    };
  },
  methods: {
    async buscarUsuarios() {
      this.carregando = true;
      this.erro = null;

      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os usuários.");
        }

        this.usuarios = await resposta.json();
      } catch (erro) {
        this.erro = "Não deu para carregar os usuários.";
        console.error(erro);
      } finally {
        this.carregando = false;
      }
    }
  },
  created() {
    this.buscarUsuarios();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
}
</style>
