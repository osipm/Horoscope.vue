<template>
  <div>
    <ProgressBar :width="80" />
    <Question
      :questionText="questionText"
      :items="items"
      :nameRout="nameRout"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Question from "../components/Question.vue";
import ProgressBar from "@/components/ProgressBar.vue";

const questionText = ref("Какой Вы видите свою жизнь через 5 лет?");
const items = ref([
  "Брак, семья, дети, дом",
  "Путешествия по Миру",
  "Успешная карьера",
  "Всё вместе",
]);
const nameRout = ref("birth");
</script>
