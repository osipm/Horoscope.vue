<template>
  <ProgressBar :width="100" />
  <div>
    <h3 class="title">Введите дату своего рождения:</h3>

    <div class="bloc-input">
      <Select
        :options="optionsDay"
        :option="optionDay"
        @current-option="(msg) => (valueDay = msg)"
      />
      <Select
        :options="optionsMoon"
        :option="optionMoon"
        @current-option="(msg) => (valueMoon = msg)"
      />
      <Select
        :options="optionsYear"
        :option="optionYear"
        @current-option="(msg) => (valueYear = msg)"
      />
      <p class="error" v-if="isError">Пожалуйста, выберите ответ</p>
      <template v-if="!isError">
        <div class="block-icon" v-for="item in dataIcon">
          <img
            class="icon"
            :src="item.image"
            :alt="item.name"
            width="81"
            height="81"
          />
          <p class="text">{{ item.name }}</p>
        </div>
      </template>

      <Button :nextQuestion="nextQuestion" :valueInput="!isError" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Select from "@/components/Select.vue";
import { arrayData } from "../context";

const router = useRouter();

const optionDay = ref("день");
const optionMoon = ref("месяц");
const optionYear = ref("год");
const optionsDay = ref([]);
const optionsMoon = ref([]);
const optionsYear = ref([]);
const valueDay = ref("");
const valueMoon = ref("");
const valueYear = ref("");

const isError = computed(() => {
  if (valueDay.value && valueMoon.value && valueYear.value) {
    return false;
  }
  {
    return true;
  }
});

function nextQuestion() {
  router.push("finish");
}

for (var i = 1; i < 32; i++) {
  optionsDay.value = [...optionsDay.value, i.toString().padStart(2, "0")];
}
for (var i = 1; i < 13; i++) {
  optionsMoon.value = [...optionsMoon.value, i.toString().padStart(2, "0")];
}
for (var i = 1900; i < 2023; i++) {
  optionsYear.value = [...optionsYear.value, i];
}

const dataIcon = computed(() => {
  return arrayData.value.filter((option) => option.moon === valueMoon.value);
});
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
  padding: 16px 0;
}

.bloc-input {
  padding: 25px 17px;
  background: var(--vt-c-light-gray);
  margin-bottom: 13px;
}

.error {
  font-weight: 300;
  font-size: 13px;
  line-height: 1.69;
  text-align: center;
  color: #d0060e;
  background: #ffd8cf;
  width: 233px;
  height: 33px;
  justify-content: center;
  margin: auto;
  display: flex;
  align-items: center;
}

.text {
  font-size: 10px;
  line-height: 2.2px;
  text-align: center;
  color: #000000;
}

.block-icon {
  display: inline-block;
  width: 100%;
}
.icon {
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
