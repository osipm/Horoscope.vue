<template>
  <h3 class="title">Обработка ваших данных:</h3>
  <div class="progres-bar">
    <div class="progress" :style="{ width: width + '%' }">
      <p class="progress-text">{{ width }}%</p>
    </div>
  </div>
  <div>
    <p class="execution-text">
      Анализ введенных данных . . . . . . .
      <span class="text-Performed" v-if="width > 12">Выполнено!</span>
    </p>
    <p class="execution-text">
      Коррекция астрологического знака . . . . . . .
      <span class="text-Performed" v-if="width > 24">Выполнено!</span>
    </p>
    <p class="execution-text">
      Расчет вариаций ответов . . . . . . .
      <span class="text-Performed" v-if="width > 36">Выполнено!</span>
    </p>
    <p class="execution-text">
      Генерация предсказания . . . . . . .
      <span class="text-Performed" v-if="width > 48">Выполнено!</span>
    </p>
    <p class="execution-text">
      Сохранение результата . . . . . . .
      <span class="text-Performed" v-if="width > 60">Выполнено!</span>
    </p>
    <p class="execution-text">
      Поиск свободного оператора . . . . . . .
      <span class="text-Performed" v-if="width > 82">Выполнено!</span>
    </p>
    <p class="execution-text">
      Начала озвучки и записи аудио-сообщения . . . . . . .
    </p>

    <h3 class="title title-ready" v-if="width > 82">Идёт запись!</h3>
    <h3 class="title title-entry" v-if="width >= 100">Готово!</h3>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const width = ref(0);
const router = useRouter();

function nextQuestion() {
  router.push("call");
}

function move() {
  const interval = setInterval(valueMove, 50);
  function valueMove() {
    if (width.value >= 100) {
      clearInterval(interval);
      setTimeout(nextQuestion(), 200);
    } else {
      width.value++;
    }
  }
}

onMounted(() => {
  move();
});
</script>

<style scoped>
.title {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: var(--vt-c-light-black);
  margin-bottom: 19px;
  margin-top: 24px;
}
.progres-bar {
  width: 289px;
  height: 42px;
  background: var(--vt-c-light-gray);
  margin-bottom: 26px;
}

@media screen and (min-width: 375px) {
  .progres-bar {
    width: 329px;
  }
}
@media screen and (min-width: 623px) {
  .progres-bar {
    width: 623px;
  }
}
.progress {
  background: var(--vt-c-green);
  height: 42px;
}

.progress-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.57;
  text-align: center;
  color: var(--vt-c-white);
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
}
.execution-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 1.33;
  color: var(--vt-c-light-black);
}

.execution-text:not(:last-child) {
  margin-bottom: 25px;
}
.text-Performed {
  color: var(--vt-c-green);
}

.title-ready {
  color: #d0060e;
  text-transform: uppercase;
}
.title-entry {
  color: var(--vt-c-green);
  text-transform: uppercase;
}
</style>
