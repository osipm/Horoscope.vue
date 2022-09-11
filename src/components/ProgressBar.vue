<template>
  <div class="progress-bar">
    <div class="filling" :style="{ width: width + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  width: number;
}>();
</script>
<style scoped>
.progress-bar {
  width: 289px;
  height: 8px;
  background: var(--vt-c-light-gray);
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
  margin-bottom: 25px;
}
@media screen and (min-width: 375px) {
  .progress-bar {
    width: 329px;
  }
}
@media screen and (min-width: 623px) {
  .progress-bar {
    width: 623px;
  }
}

.filling {
  height: 8px;
  background: var(--vt-c-red-brown);
}
</style>
