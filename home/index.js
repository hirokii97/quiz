"use strict";

import { quizzes } from "../quizzes.js";

const result = document.getElementsByClassName("your-result")[0];
const question = document.getElementsByClassName("question-link")[0];

for (let index = 0; index < quizzes.length; index++) {

  // localStorageにデータがない時はquizzes.jsのデータを登録
  if (localStorage.getItem(`${quizzes[index][0].quizName}`) === "undefined" || localStorage.getItem(`${quizzes[index][0].quizName}`) === null) {
    const quizDataJson = JSON.stringify(quizzes[index]);
    console.log(quizDataJson);
    localStorage.setItem(`${quizzes[index][0].quizName}`, quizDataJson);
  }

  let quizData = JSON.parse(localStorage.getItem(`${quizzes[index][0].quizName}`));

  // 学習記録
  const question_name = document.createElement("p");
  question_name.className = `question_number_${index}`;
  question_name.textContent = quizData[0].quizName;

  // テスト結果
  const question_result = document.createElement("p");
  question_result.className = `question_result_${index}`;
  const quizCount = quizData.length;

  let collectCount = 0;
  for (let i = 0; i < quizCount; i++) {
    const judge = quizData[i].judge;
    if (judge === "正解") {
      collectCount += 1;
    }
  }
  question_result.textContent = `${quizCount}問中 ${collectCount}問 正解`;

  // 問題を解く
  const questionLink = document.createElement("a");
  questionLink.href = `../question/index.html?${quizData[0].quizTitle}`;
  questionLink.className = `question_link_${index}`;
  questionLink.textContent = quizData[0].quizName;

  result.appendChild(question_name);
  result.appendChild(question_result);
  question.appendChild(questionLink);
}
