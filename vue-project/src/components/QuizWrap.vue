<script setup>
import QuizAnswers from './QuizAnswers.vue'
const props = defineProps(['quizData'])
</script>
<template>
  <div v-for="quiz in props.quizData[0].question" :key="quiz.quizTitle" id="question-wrapper">
    <div class="quiz">
      <h2 class="question_number">{{ quiz.questionNumber }}</h2>
      <p class="question">{{ quiz.question }}</p>
      <QuizAnswers :quiz="quiz" />
    </div>
  </div>
</template>
