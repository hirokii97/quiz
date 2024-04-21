"use strict";
import { quizzes } from "../quizzes.js";

// URLのパラメータから「問題名」を取得
const quizTitle = new URL(location.href).searchParams.get("title");

for (let index = 0; index < quizzes.length; index++) {
  const quiz = quizzes[index];
  if (quiz[0].quizTitle === `title=${quizTitle}`) {
    let correctPoint = 0;
    let answerNumber = 0;

    //正解・不正解の判定、表示
    const judge = (e, i, correctBox) => {
      const correct = quiz[i].correct;
      quiz[i].yourAnswer = e.target.textContent;

      correctBox.className = `correctBox_${i}`;

      if (correct === e.target.textContent) {
        correctBox.textContent = "正解";
        quiz[i].judge = "正解";
        correctPoint++;
      } else {
        correctBox.textContent = "不正解";
        quiz[i].judge = "不正解";
      }
      answerNumber++;
    };

    //quizの数だけ表示する
    const quizLength = quiz.length;

    const quizWrapper = document.getElementById("question-wrapper");

    //問題の表示
    for (let i = 0; i < quizLength; i++) {
      const quizBox = document.createElement("div");
      quizBox.className = `quiz_${i}`;

      //クイズ番号
      const question_number = document.createElement("h2");
      question_number.className = `question_number_${i + 1}`;
      question_number.textContent = quiz[i].questionNumber;
      quizBox.appendChild(question_number);

      //クイズ内容
      const question = document.createElement("p");
      question.className = `question_${i + 1}`;
      question.textContent = quiz[i].question;
      quizBox.appendChild(question);

      //選択肢
      const answersBox = document.createElement("div");

      for (let a = 0; a < quiz[i].answers.length; a++) {
        const answers = document.createElement("button");
        answers.className = `answers_${i + 1}`;
        answers.textContent = quiz[i].answers[a];
        answersBox.appendChild(answers);

        const correctBox = document.createElement("div");

        answers.addEventListener("click", (e) => {
          judge(e, i, correctBox);
          const allAnswers = document.getElementsByClassName(answers.className);

          for (let index = 0; index < allAnswers.length; index++) {
            allAnswers[index].disabled = "true";
          }
          quizBox.appendChild(correctBox);
          answerNumberCount(answerNumber);
        });
      }

      quizBox.appendChild(answersBox);
      quizWrapper.appendChild(quizBox);
    }

    const answerNumberCount = (answerNumber) => {
      //全問回答したら表示する
      if (answerNumber === quizLength) {
        const quizDataJson = JSON.stringify(quiz);
        localStorage.setItem(quizzes[index][0].quizName, quizDataJson);
      }
    };
    // 問題を解く
    const resultLink = document.getElementById("toResult");
    resultLink.href = `../result/index.html?${quiz[0].quizTitle}`;
  }
}
