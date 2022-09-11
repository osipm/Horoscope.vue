<template>
  <div>
    <h3 class="title">{{ questionText }}</h3>

    <div class="bloc-input" :class="{ disp: items.length < 3 }">
      <div
        class="item-input"
        v-for="item in items"
        :key="item"
        :class="{ mb_item_input: items.length > 2 }"
      >
        <input
          class="input"
          type="radio"
          :id="item"
          :value="item"
          v-model="valueInput"
        />
        <label class="label" :for="item">{{ item }}</label>
      </div>
    </div>
    <div class="bloc-btn">
      <Button :nextQuestion="nextQuestion" :valueInput="valueInput" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";

const props = defineProps<{
  questionText: string;
  items: string[];
  nameRout: string;
}>();

const router = useRouter();
const valueInput = ref("");

function nextQuestion() {
  router.push(props.nameRout);
}
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.57;
  color: var(--vt-c-white);
  text-align: center;
  background: var(--vt-c-light-black);
  text-align: center;
  padding: 14px 20px;
}

@media screen and (min-width: 623px) {
  .title {
    font-size: 20px;
    line-height: 1.1;
    padding: 29px 10px;
  }
}

.bloc-input {
  padding: 25px 17px;
  background: var(--vt-c-light-gray);
  margin-bottom: 13px;
}

@media screen and (min-width: 623px) {
  .bloc-input {
    padding: 53px 17px;
    margin-bottom: 25px;
  }
}

.disp {
  display: flex;
  justify-content: space-around;
}

.input {
  margin: 0 11px 0 0;
}

.mb_item_input:not(:last-child) {
  margin-bottom: 30px;
}

.item:not(:last-child) {
  margin-bottom: 30px;
}

.label {
  font-size: 14px;
  line-height: 1.57;
}

@media screen and (min-width: 623px) {
  .label {
    font-size: 16px;
    line-height: 1.38;
  }
}

.label:not(:last-child) {
  margin-right: 36px;
}
.bloc-btn {
  text-align: center;
}
</style>
