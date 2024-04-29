<script setup>
import QuizAnswer from './QuizAnswer.vue'
import { ref } from 'vue'

const props = defineProps(['quiz'])
const isSelected = ref(false)
const judgeText = ref('')
const judgeClass = ref('')

const buttonDisabled = () => {
  isSelected.value = true
}
const showJudgeFunction = (quiz) => {
  judgeText.value = quiz.judge
  console.log(quiz)

  if (quiz.judge === '正解!!') {
    judgeClass.value = 'judge_correct'
  } else {
    judgeClass.value = 'judge_false'
  }
}
</script>
<template>
  <div v-for="answer in props.quiz.answers" :key="answer.id" class="answerBox">
    <QuizAnswer
      @buttonDisabled="buttonDisabled(quiz.id)"
      @showJudge="showJudgeFunction(quiz)"
      :isSelected="isSelected"
      :answer="answer"
      :quiz="quiz"
    />
  </div>
  <!-- <div class="correctBox ">{{ judgeText }}</div> -->
  <div :class="`correctBox ${judgeClass}`">{{ judgeText }}</div>
</template>
