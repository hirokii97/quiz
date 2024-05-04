<script setup>
import { quizzes } from '../quizzes'
import QuizWrap from '../components/QuizWrap.vue'
// import { ref } from 'vue'

// URLから問題名取得
const quizTitle = new URL(location.href).searchParams.get('title')

// 表示する問題を絞り込み
const quizData = quizzes.filter((quiz) => {
  return quiz[0].quizTitle === `title=${quizTitle}`
})[0]

// 結果を見るのボタンの処理
// to do 全て回答したら表示
const saveQuizData = () => {
  quizData[0].answered = true
  quizData[0].status = '回答済み'

  let correctCount = 0
  quizData[0].question.map((quiz) => {
    if (quiz.judge === '正解!!') {
      correctCount++
    }
    return correctCount
  })

  // 正答率75%以上で合格
  const quizCount = quizData[0].question.length

  if ((correctCount / quizCount) * 100 >= 75) {
    quizData[0].finalJudge = true
  }

  quizData[0].correctCount = correctCount

  const quizDataJson = JSON.stringify(quizData)
  localStorage.setItem(quizData[0].quizTitle, quizDataJson)
}
</script>

<template>
  <section class="quiz_box">
    <h1>問題</h1>
    <QuizWrap :quizData="quizData" />
    <br />
    <a
      class="btn"
      @click="saveQuizData"
      id="toResult"
      v-bind:href="`/result/?${quizData[0].quizTitle}`"
      >結果を見る</a
    >
  </section>
</template>

<style>
.question_box {
  background-color: #fff;
  margin-top: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
}

.question {
  font-size: 18px;
  margin-top: 18px;
}

.quiz {
  background: #fff;
  padding: 32px 7%;
  margin-top: 32px;
}

.question_number {
  margin-top: 8px;
}

.answerBox {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  cursor: pointer;
}

.answer {
  width: 45%;
}
.answerBox button {
  border: #000 1px solid;
  padding: 16px 8px;
  border-radius: 5px;
  background-color: #fff;
}
.answerBox button.selected {
  border: none;
  background-color: #4882f7;
  color: #fff;
}

.correctBox {
  margin-top: 16px;
  margin-bottom: 16px;
}

.correctBox.judge_correct {
  color: red;
}
.correctBox.judge_false {
  color: gray;
}

.quiz_box .answer_result {
  display: none;
  transition: all 0.5s;
}

.quiz_box .active_result {
  display: block;
}
</style>
