<script setup>
import { quizzes } from '../quizzes'
import { ref } from 'vue'

// URLから問題名取得
const quizTitle = new URL(location.href).searchParams.get('title')

// 表示する問題を絞り込み
const quizData = quizzes.filter((quiz) => {
  return quiz[0].quizTitle === `title=${quizTitle}`
})[0]

console.log(quizData)

// 正解、不正解の表示
const judgeText = ref('')
let isSelected = false

// 正誤判定、表示、回答データのアップデート
const answerButton = (e, quiz) => {
  if (e.target.textContent === quiz.correct) {
    judgeText.value = '正解！！'
    isSelected = true
    console.log(isSelected)
  } else {
    judgeText.value = '不正解'
  }
}
// 結果を見るのボタンの処理
</script>

<template>
  <section class="quiz_box">
    <h1>問題</h1>
    <div v-for="quiz in quizData[0].question" :key="quiz.quizTitle" id="question-wrapper">
      <div class="quiz">
        <h2 class="question_number">{{ quiz.questionNumber }}</h2>
        <p class="question">{{ quiz.question }}</p>
        <div v-for="answer in quiz.answers" :key="answer.id" class="answerBox">
          <!-- <button @click="(e)=>answerButton(e,quiz)" class="answer_0 answer">{{ answer }}</button> -->
          <button
            @click="(e) => answerButton(e, quiz)"
            class="answer_0 answer"
            :class="[isSelected ? selected : '']"
          >
            {{ answer }}
          </button>
        </div>
        <div class="correctBox judge_correct">{{ judgeText }}</div>
      </div>
    </div>
    <br />
    <a class="btn" id="toResult" href="../result/?title=geography01">結果を見る</a>
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

.btn {
  max-width: 550px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #4882f7;
  margin: 16px auto 32px;
  padding: 16px;
  width: 100%;
  height: 50px;
}
</style>
