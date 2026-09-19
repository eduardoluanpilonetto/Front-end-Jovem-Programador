// app.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Exercício 1: Primeiro app
      mensagemInicial: "Minha primeira app Vue!",

      // Exercício 2 e 3: Dados pessoais / frase montada
      nome: "Maria",
      idade: 22,
      cidade: "Concórdia",

      // Exercício 4: Imagem dinâmica
      urlImagem: "https://vuejs.org/images/logo.png",

      // Exercício 5: Link dinâmico
      linkSite: "https://vuejs.org",

      // Exercício 6: Login simples
      logado: false,

      // Exercício 7: Carregando
      carregando: true,

      // Exercício 8, 9 e 10: Contador de cliques
      contador: 0
    };
  },
  methods: {
    // Exercício 8: incrementa o contador a cada clique
    incrementar() {
      this.contador++;
    },
    // Exercício 10: zera o contador
    zerar() {
      this.contador = 0;
    }
  }
}).mount("#app");
