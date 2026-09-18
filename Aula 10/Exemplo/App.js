const { createApp } = Vue;
 
createApp({
  data() {
    return {
      mensagem: 'Minha primeira app Vue!',
      professormaislindo: 'O professor mais lindo do mundo é o Eduardo Pilonetto'
    };
  }
}).mount('#app');