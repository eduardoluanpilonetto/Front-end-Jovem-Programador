<template>
  <header>
    <h2>Meu App de Tarefas</h2>
  </header>

  <nav>
    <router-link to="/">Início</router-link>
    <router-link to="/tarefas">Tarefas</router-link>
    <router-link to="/sobre">Sobre</router-link>
  </nav>

  <router-view />

  <footer>
    <p>Feito por Professor Bonitão</p>
  </footer>
</template>

<style>
  nav {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }
</style>