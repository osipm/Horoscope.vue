<template>
  <div>
    <ProgressBar :width="60" />
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
  "Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?"
);
const items = ref(["да", "нет", "иногда"]);
const nameRout = ref("life");
</script>
