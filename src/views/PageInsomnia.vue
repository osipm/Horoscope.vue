<template>
  <div>
    <ProgressBar :width="40" />
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
  "Подскажите, мучает ли вас бессонница последнее время?"
);
const nameRout = ref("plans");
const items = ref(["да", "нет", "иногда"]);
</script>
