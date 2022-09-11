<template>
  <div class="v-select">
    <div class="select" @click="isOptionVisible = !isOptionVisible">
      <p class="title">
        {{ valueOption ? valueOption : option }}
      </p>
      <span class="icon"
        ><img
          src="../components/image/icon/Back.svg"
          alt=""
          width="15"
          height="8"
      /></span>
    </div>
    <div v-if="isOptionVisible" class="option">
      <p
        class="title"
        v-for="item in options"
        :key="item"
        @click="selectOption(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
defineProps<{
  options: string[];
  option: string;
}>();

const isOptionVisible = ref(false);
const valueOption = ref("");

const emit = defineEmits(["current-option"]);

function selectOption(item: string) {
  valueOption.value = item;
  isOptionVisible.value = false;
  emit("current-option", `${item}`);
}
</script>

<style scoped>
.v-select {
  position: relative;
  width: 186px;
  height: 45px;
  cursor: pointer;
  background: var(--vt-c-white);
  border: 1px solid #e4e4e4;
  margin: auto;
  margin-bottom: 15px;
}

.select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.title {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.57;
  color: var(--vt-c-blue);
  padding: 0 17px;
}

.icon {
  padding-right: 17px;
}
.option {
  border: solid 1px #e4e4e4;
  background: var(--vt-c-white);
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: scroll;
  z-index: 111;
}

.option p:hover {
  background: #e4e4e4;
}
</style>
