<script setup>
// import { ref } from 'vue'
const props = defineProps(['id', 'answer', 'quiz', 'isSelected'])
const emit = defineEmits(['showJudge', 'buttonDisabled'])

// const judgeText = ref('')
// 正誤判定、表示、回答データのアップデート
// const answerButton = (e, quiz) => {
//   if (e.target.textContent === quiz.correct) {
//     const judge = '正解'
//     return emit('showJudge', judge)
//   } else {
//     const judge = '不正解・・ドンマイ！'
//     return emit('showJudge', judge)
//   }
// }
const answerButton = (e, quiz) => {
  quiz.yourAnswer = e.target.textContent
  e.target.classList.add('selected')
  emit('buttonDisabled')

  if (e.target.textContent === quiz.correct) {
    quiz.judge = '正解!!'
    return emit('showJudge', quiz)
  } else {
    quiz.judge = '不正解・・ドンマイ！'
    return emit('showJudge', quiz)
  }
}
</script>
<template>
  <button
    :disabled="isSelected"
    class="answer_0 answer"
    @click="(e) => answerButton(e, props.quiz)"
  >
    {{ props.answer }}
  </button>
</template>
