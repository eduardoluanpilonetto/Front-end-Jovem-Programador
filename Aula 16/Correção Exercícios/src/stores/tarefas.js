import { defineStore } from "pinia";

export const useTarefasStore = defineStore("tarefas", {
  state: () => ({
    lista: [],
    carregando: false,
    erro: "",
    carregada: false,
  }),

  getters: {
    restantes: (state) => state.lista.filter((tarefa) => !tarefa.feita).length,
    total: (state) => state.lista.length,
  },

  actions: {
    marcarFeita(id) {
      const tarefa = this.lista.find((item) => item.id === id);
      if (tarefa) tarefa.feita = true;
    },

    adicionar(texto) {
      const textoLimpo = texto.trim();
      if (!textoLimpo) return;

      let id = Date.now();
      while (this.lista.some((tarefa) => tarefa.id === id)) id += 1;
      this.lista.push({ id, texto: textoLimpo, feita: false });
    },

    async carregar() {
      this.carregando = true;
      this.erro = "";

      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        if (!resposta.ok) {
          throw new Error(`A API respondeu com o status ${resposta.status}.`);
        }

        const dados = await resposta.json();
        if (!Array.isArray(dados)) {
          throw new Error("A resposta da API não contém uma lista de tarefas.");
        }

        this.lista = dados.map((item) => ({
          id: item.id,
          texto: item.title,
          feita: item.completed,
        }));
        this.carregada = true;
      } catch (erro) {
        this.erro =
          erro instanceof Error
            ? `Não foi possível carregar as tarefas: ${erro.message}`
            : "Não foi possível carregar as tarefas.";
      } finally {
        this.carregando = false;
      }
    },
  },
});
