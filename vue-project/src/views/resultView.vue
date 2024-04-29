<script setup>
const quizTitle = new URL(location.href).searchParams.get('title')
const quiz = JSON.parse(localStorage.getItem(`title=${quizTitle}`))
console.log(quiz)

const quizCount = quiz[0].question.length
const correctCount = quiz[0].correctCount
const finalJudge = quiz[0].finalJudge
</script>

<template>
  <div class="answer_result_wrap">
    <h2 class="answer_result_title">結果</h2>
    <h3 id="answer_result">{{ finalJudge ? '合格' : '不合格' }}</h3>
    <div id="answer_result_text">あなたは{{ quizCount }}問中 {{ correctCount }}問 正解しました</div>
    <div id="answer_detail"></div>
    <a href="/" class="btn">ホームへ戻る</a>
  </div>
</template>

<style>
.answer_result_wrap #answer_result {
  margin: 32px 0px 24px;
  text-align: center;
  font-size: 32px;
}
.answer_result_wrap h2 {
  margin: 24px;
  text-align: center;
  font-size: 32px;
}

#answer_result_text {
  text-align: center;
  padding-top: 24px;
  font-size: 20px;
}

.answer_result_title.btn {
  margin-top: 64px;
}
</style>
