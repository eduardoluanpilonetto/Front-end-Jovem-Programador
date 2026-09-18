const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,
      nomeprofessor: "Eduardo Luan Pilonetto",
      verprofessor: false
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    zerar() {
      this.contador = 0;
    },
    mostrar(){
      this.verprofessor = true;
    }
  }
}).mount('#app');
