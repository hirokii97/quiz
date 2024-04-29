<script setup>
// import { quizzes } from '../quizzes.js'
import { quizzes } from '../quizzes_demo.js'

const allQuizData = quizzes.map((question) => {
  if (
    localStorage.getItem(`${question[0].quizTitle}`) === 'undefined' ||
    localStorage.getItem(`${question[0].quizTitle}`) === null
  ) {
    // localに初期値を設定する
    const quizDataJson = JSON.stringify(question)
    localStorage.setItem(`${question[0].quizTitle}`, quizDataJson)
  }

  return JSON.parse(localStorage.getItem(`${question[0].quizTitle}`))
})
</script>

<template>
  <body>
    <section class="quiz_box">
      <div class="my_icon"></div>
      <p class="my_name">太郎</p>

      <div id="question-wrapper">
        <section>
          <h2>学習記録</h2>
          <div v-for="quizData in allQuizData" :key="quizData" class="your-result">
            <div class="question_box">
              <p class="question_box_name">{{ quizData[0].quizName }}</p>
              <p class="question_box_status">{{ quizData[0].status }}</p>
              <p class="question_box_result">
                {{ quizData[0].question.length }}問中 {{ quizData[0].correctCount }}問 正解
              </p>
            </div>
          </div>
        </section>
        <section class="question-link-section">
          <h2>問題をとく</h2>
          <div v-for="quizData in allQuizData" :key="quizData" class="question-link-wrap">
            <a v-bind:href="`/question/?${quizData[0].quizTitle}`" class="question_link">
              {{ quizData[0].quizName }}
            </a>
          </div>
        </section>
      </div>
      <br />
    </section>
  </body>
</template>

<style>
.my_icon {
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background-color: #000;
  opacity: 0.4;
  margin: 60px auto 0px;
}
.my_name {
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-size: 24px;
}
h2 {
  font-size: 20px;
  margin-top: 32px;
}

.question_name {
  margin-top: 8px;
}

.question_link {
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  height: 50px;
}
.question_box {
  background-color: #fff;
  margin-top: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
}
.question_box_name {
  flex: 1;
}
.question_box_status {
  margin-right: 10px;
}
</style>
