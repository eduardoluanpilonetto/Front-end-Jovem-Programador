<script setup>
defineProps({
  texto: { type: String, required: true },
  feita: { type: Boolean, default: false },
});

defineEmits(["concluir"]);
</script>

<template>
  <li class="task-row" :class="{ 'is-done': feita }">
    <span class="task-check" aria-hidden="true">{{ feita ? "✓" : "" }}</span>
    <span class="task-text">{{ texto }}</span>
    <button
      class="complete-button"
      type="button"
      :disabled="feita"
      :aria-label="feita ? `${texto} — concluída` : `Concluir ${texto}`"
      @click="$emit('concluir')"
    >
      {{ feita ? "Concluída" : "Concluir" }}
    </button>
  </li>
</template>
