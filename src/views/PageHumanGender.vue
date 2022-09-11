<template>
  <div class="block-picture">
    <picture>
      <source
        srcset="../components/image/goroscope623.png"
        media="(min-width: 623px)"
        type="image/png"
      />
      <source
        srcset="../components/image/goroscope375.png"
        media="(min-width: 375px)"
        type="image/png"
      />
      <img
        class="picture"
        src="../components/image/goroscope.png"
        alt="goroscope"
      />
    </picture>
  </div>
  <h2 class="title">Узнайте, как 2021 год изменит жизнь каждого из нас!</h2>
  <p class="text">
    К сожалению, 2020 год принес нам немало неприятностей, даже откровенных
    проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут
    долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
  </p>
  <Question :questionText="questionText" :items="items" :nameRout="nameRout" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Question from "../components/Question.vue";
const questionText = ref("Укажите свой пол:");
const items = ref(["женщина", "мужчина"]);
const nameRout = ref("time-day");
</script>

<style scoped>
.block-picture {
  height: 158px;
  max-width: 287px;
  background-image: url(../components/image/fon.png);
  margin-bottom: 10px;
}

@media screen and (min-width: 375px) {
  .block-picture {
    height: 182px;
    max-width: 329px;
    margin-bottom: 18px;
    background-image: url(../components/image/fon375.png);
  }
}
@media screen and (min-width: 623px) {
  .block-picture {
    height: 344px;
    max-width: 623px;
    margin-bottom: 34px;
    background-image: url(../components/image/fon623.png);
  }
}
.picture {
  height: 158px;
  animation: spin linear infinite 4s;
}

@media screen and (min-width: 375px) {
  .picture {
    height: 167px;
  }
}
@media screen and (min-width: 623px) {
  .picture {
    height: 344px;
  }
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.title {
  font-weight: 500;
  font-size: 17px;
  line-height: 1.29;
  color: var(--vt-c-blue);
  margin-bottom: 10px;
}
@media screen and (min-width: 623px) {
  .title {
    font-size: 20px;
    line-height: 1.1;
  }
}

.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  color: var(--vt-c-light-black);
  margin-bottom: 10px;
}

@media screen and (min-width: 623px) {
  .text {
    font-size: 16px;
    line-height: 1.44;
  }
}
</style>
