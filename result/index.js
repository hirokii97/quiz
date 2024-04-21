"use strict";
import { quizzes } from "../quizzes.js";

// URLのパラメータから「問題名」を取得
const quizTitle = new URL(location.href).searchParams.get("title");

for (let index = 0; index < quizzes.length; index++) {
  let quizData = JSON.parse(localStorage.getItem(`${quizzes[index][0].quizName}`));

  if (quizData[0].quizTitle === `title=${quizTitle}`) {
    const result = document.getElementById("answer_result");
    const quizCount = quizData.length;

    let collectCount = 0;
    for (let i = 0; i < quizCount; i++) {
      const judge = quizData[i].judge;
      if (judge === "正解") {
        collectCount += 1;
      }
    }
    const correctRate = (collectCount / quizData.length) * 100;

    if (correctRate >= 75) {
      result.textContent = "合格！";
    } else {
      result.textContent = "不合格";
    }

    const resultDetail = document.getElementById("answer_result_text");
    resultDetail.textContent = `あなたは${quizData.length}問中  ${collectCount}問 正解しました`;

    // 答えと解説を表示
    const answerDetail = document.getElementById("answer_detail");

    for (let i = 0; i < quizData[0]; i++) {
      const quizBox = document.createElement("div");
      quizBox.className = `quiz_${i}`;

      //クイズ番号
      const question_number = document.createElement("h2");
      question_number.className = `question_number_${i + 1}`;
      question_number.textContent = quizData[i].questionNumber;
      quizBox.appendChild(question_number);

      //正解・不正解
      const question_judge = document.createElement("p");
      question_judge.className = `question_judge_${i + 1}`;
      question_judge.textContent = quizData[i].judge;
      quizBox.appendChild(question_judge);

      //クイズ内容
      const question = document.createElement("p");
      question.className = `question_${i + 1}`;
      question.textContent = `問題： ${quizData[i].question}`;
      // question.textContent = quizData[i].question;
      quizBox.appendChild(question);

      //選択肢
      const answersBox = document.createElement("div");

      answersBox.textContent = `あなたの答え： ${quizData[i].yourAnswer}`;

      quizBox.appendChild(answersBox);
      answerDetail.appendChild(quizBox);
    }
  }
}
