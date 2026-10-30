<script setup>
const correcoes = [
  {
    numero: "01",
    titulo: "Instalando o Pinia",
    descricao:
      "Pinia está nas dependências do projeto e é registrada uma vez no ponto de entrada.",
    codigo: 'createApp(App).use(createPinia()).use(router).mount("#app");',
  },
  {
    numero: "02",
    titulo: "Minha primeira store",
    descricao:
      "A store useTarefasStore começa com lista vazia e centraliza o estado compartilhado.",
    codigo: "state: () => ({ lista: [], carregando: false, erro: \"\" })",
  },
  {
    numero: "03",
    titulo: "Preenchendo o state",
    descricao:
      "A tela de tarefas consome a lista da store e renderiza cada item com uma chave única.",
    codigo: 'store.lista.map(({ title }) => ({ texto: title }))',
  },
  {
    numero: "04",
    titulo: "Criando um getter",
    descricao:
      "O getter restantes conta somente os itens que ainda não foram concluídos.",
    codigo: "restantes: (state) => state.lista.filter((t) => !t.feita).length",
  },
  {
    numero: "05",
    titulo: "Action para concluir",
    descricao:
      "marcarFeita(id) localiza o item pelo identificador e atualiza feita para true.",
    codigo: "marcarFeita(id) { this.lista.find((t) => t.id === id).feita = true }",
  },
  {
    numero: "06",
    titulo: "Action para adicionar",
    descricao:
      "O formulário usa v-model; adicionar(texto) insere a tarefa e limpa o campo.",
    codigo: "this.lista.push({ id: Date.now(), texto: texto.trim(), feita: false })",
  },
  {
    numero: "07",
    titulo: "Estado compartilhado",
    descricao:
      "Cabeçalho, rodapé e tela de tarefas consultam a mesma store, sem passar props entre eles.",
    codigo: "const store = useTarefasStore()",
  },
  {
    numero: "08",
    titulo: "Componente filho",
    descricao:
      "TarefaItem recebe texto/feita por props e emite concluir para o componente pai.",
    codigo: '<TarefaItem @concluir="store.marcarFeita(tarefa.id)" />',
  },
  {
    numero: "09",
    titulo: "Tarefas da API",
    descricao:
      "A busca trata carregamento e erros, converte title/completed e grava tudo na store.",
    codigo: "fetch + async/await + try/catch",
  },
  {
    numero: "10",
    titulo: "Projeto final",
    descricao:
      "Rotas, store persistente entre páginas, componentes reutilizáveis e watch estão integrados.",
    codigo: "Home · Tarefas · Sobre",
  },
];
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <span class="eyebrow"><span class="eyebrow-line"></span> AULA 07 · PINIA</span>
      <h1>Aprender Vue,<br /><span>na prática.</span></h1>
      <p>
        Uma correção interativa dos exercícios de Pinia: estado compartilhado,
        componentes e um gerenciador de tarefas completo.
      </p>
      <RouterLink class="primary-button" to="/tarefas">
        Experimentar tarefas <span aria-hidden="true">→</span>
      </RouterLink>
      <div class="hero-note">
        <span class="note-icon">✳</span>
        <span>Seu progresso fica disponível ao navegar pelo app.</span>
      </div>
    </div>

    <div class="hero-visual" aria-label="Resumo visual de uma store Pinia">
      <div class="visual-orbit orbit-one"></div>
      <div class="visual-orbit orbit-two"></div>
      <div class="store-card">
        <div class="store-card-top">
          <span class="store-icon">P</span>
          <span class="store-label">PINIA STORE</span>
          <span class="live-indicator">●</span>
        </div>
        <div class="store-code">
          <span class="code-muted">const</span> tarefas
          <span class="code-muted">=</span> {
          <div class="code-indent"><span class="code-key">lista</span>: [</div>
          <div class="code-indent code-task">✦ estudar Pinia</div>
          <div class="code-indent">],</div>
          <div class="code-indent"><span class="code-key">restantes</span>:</div>
          <div class="code-indent code-number">computed · {{ " " }}3</div>
          }
        </div>
        <div class="store-card-bottom">
          <span>estado compartilhado</span>
          <span class="sync-symbol">↗</span>
        </div>
      </div>
      <div class="floating-tag tag-top">reativo por natureza</div>
      <div class="floating-tag tag-bottom">01 / 10 exercícios</div>
    </div>
  </section>

  <section class="corrections-section" aria-labelledby="corrections-title">
    <div class="section-heading">
      <div>
        <span class="eyebrow">GUIA DE ESTUDO</span>
        <h2 id="corrections-title">As correções, <span>passo a passo.</span></h2>
      </div>
      <span class="exercise-count">10 EXERCÍCIOS</span>
    </div>

    <div class="corrections-grid">
      <article v-for="item in correcoes" :key="item.numero" class="correction-card">
        <div class="card-heading">
          <span class="exercise-number">{{ item.numero }}</span>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descricao }}</p>
        <code>{{ item.codigo }}</code>
      </article>
    </div>
  </section>

  <section class="next-step">
    <div>
      <span class="eyebrow">AGORA É COM VOCÊ</span>
      <h2>Uma lista real para testar tudo.</h2>
      <p>Adicione tarefas, conclua algumas e veja a store atualizar cada tela.</p>
    </div>
    <RouterLink class="secondary-button" to="/tarefas">Abrir gerenciador <span>→</span></RouterLink>
  </section>
</template>
