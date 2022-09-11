<template>
  <div class="bloc-btn">
    <button v-if="valueInput" class="btn" @click="nextQuestion">далее</button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  nextQuestion: () => void;
  valueInput: string;
}>();
</script>
<style>
.bloc-btn {
  text-align: center;
}
.btn {
  width: 186px;
  height: 45px;
  background: var(--vt-c-blue);
  border: 1px solid var(--vt-c-blue);
  margin: auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.57;
  text-transform: uppercase;
  color: var(--vt-c-white);
}
</style>
