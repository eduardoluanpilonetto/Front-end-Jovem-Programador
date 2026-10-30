<script setup>
import { onMounted, ref } from "vue";
import TarefaItem from "../components/TarefaItem.vue";
import { useTarefasStore } from "../stores/tarefas";

const store = useTarefasStore();
const texto = ref("");
const aviso = ref("");

onMounted(() => {
  if (!store.carregada && !store.carregando) store.carregar();
});

function adicionarTarefa() {
  if (!texto.value.trim()) {
    aviso.value = "Escreva uma tarefa antes de adicionar.";
    return;
  }

  store.adicionar(texto.value);
  texto.value = "";
  aviso.value = "";
}
</script>

<template>
  <section class="tasks-page">
    <div class="page-intro">
      <span class="eyebrow"><span class="eyebrow-line"></span> SUA LISTA</span>
      <h1>Pequenos passos,<br /><span>grandes entregas.</span></h1>
      <p>As tarefas ficam na store Pinia e acompanham você por todas as páginas.</p>
    </div>

    <div class="task-panel">
      <div class="task-panel-heading">
        <div>
          <span class="panel-kicker">GERENCIADOR</span>
          <h2>Minhas tarefas</h2>
        </div>
        <span class="task-counter">{{ store.restantes }} <small>restantes</small></span>
      </div>

      <form class="add-task-form" @submit.prevent="adicionarTarefa">
        <label class="sr-only" for="nova-tarefa">Digite uma tarefa</label>
        <input
          id="nova-tarefa"
          v-model="texto"
          type="text"
          maxlength="120"
          placeholder="O que você quer fazer?"
          @input="aviso = ''"
        />
        <button class="primary-button" type="submit">Adicionar <span>+</span></button>
      </form>
      <p v-if="aviso" class="form-message" role="alert">{{ aviso }}</p>

      <div v-if="store.carregando" class="state-message" role="status">
        <span class="loading-spinner"></span>
        Carregando tarefas da API...
      </div>
      <div v-else-if="store.erro" class="error-message" role="alert">
        <div>
          <strong>Não foi possível buscar as tarefas.</strong>
          <p>{{ store.erro }}</p>
        </div>
        <button class="retry-button" type="button" @click="store.carregar()">Tentar novamente</button>
      </div>
      <div v-else-if="store.lista.length === 0" class="empty-state">
        <span class="empty-icon">✳</span>
        <h3>Sua lista começa aqui.</h3>
        <p>Adicione a primeira tarefa usando o campo acima.</p>
      </div>
      <ul v-else class="task-list">
        <TarefaItem
          v-for="tarefa in store.lista"
          :key="tarefa.id"
          :texto="tarefa.texto"
          :feita="tarefa.feita"
          @concluir="store.marcarFeita(tarefa.id)"
        />
      </ul>

      <div class="list-footer">
        <span><span class="status-dot"></span> Sincronizado com a store</span>
        <span>{{ store.total }} no total</span>
      </div>
    </div>
    <p class="tasks-footnote">
      <span>✦</span> As tarefas iniciais vêm do JSONPlaceholder; as novas são adicionadas localmente.
    </p>
  </section>
</template>
