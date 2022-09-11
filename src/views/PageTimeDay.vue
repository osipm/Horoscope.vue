<template>
  <div>
    <ProgressBar :width="20" />
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
const questionText = ref(
  "В какое время суток Вы чувствуете себя наиболее комфортно?"
);
const items = ref(["утро", "ночь", "вечер", "день"]);
const nameRout = ref("insomnia");
</script>
