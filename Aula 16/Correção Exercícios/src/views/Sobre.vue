<template>
  <section class="about-page">
    <span class="eyebrow"><span class="eyebrow-line"></span> SOBRE O PROJETO</span>
    <h1>Estado simples.<br /><span>Ideias em movimento.</span></h1>
    <p class="about-lead">
      Este projeto demonstra como Pinia ajuda componentes diferentes a trabalharem
      com os mesmos dados, sem precisar passar propriedades de um para o outro.
    </p>

    <div class="about-grid">
      <article class="about-card">
        <span class="about-icon">01</span>
        <h2>Uma única fonte</h2>
        <p>A lista, o contador e o total são lidos da mesma store Pinia.</p>
      </article>
      <article class="about-card">
        <span class="about-icon">02</span>
        <h2>Componentes conectados</h2>
        <p>Cabeçalho e rodapé acompanham as mudanças sem receber props.</p>
      </article>
      <article class="about-card">
        <span class="about-icon">03</span>
        <h2>Navegação com estado</h2>
        <p>As rotas trocam de página sem recriar ou perder a lista compartilhada.</p>
      </article>
    </div>

    <RouterLink class="primary-button" to="/tarefas">Ver a aplicação em ação <span>→</span></RouterLink>
  </section>
</template>
