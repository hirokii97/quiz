"use strict";
const { v4: uuidv4 } = require("uuid");

const playerId = uuidv4();
const questionId = "A";

const params = {
  team: questionId,
  playerId: playerId
}

const urlParam = new URLSearchParams(params).toString();
console.log(urlParam);

const toResult = document.getElementById('toResult')
toResult.href = '../result/index.html' + '?' + urlParam 

const quiz = [
  {
    questionNumber: "質問１",
    question: "東京の首都は？",
    answers: ["a.川崎", "b.東京", "c.大阪", "d.名古屋"],
    correct: "b.東京",
  },
  {
    questionNumber: "質問２",
    question: "イギリスの首都は？",
    answers: ["a.川崎", "b.ロンドン", "c.大阪", "d.名古屋"],
    correct: "b.ロンドン",
  },
  {
    questionNumber: "質問３",
    question: "オーストラリアの首都は？",
    answers: ["a.川崎", "b.ロンドン", "c.キャンベラ", "d.名古屋"],
    correct: "c.キャンベラ",
  },
  {
    questionNumber: "質問4",
    question: "イタリアの首都は？",
    answers: ["a.ローマ", "b.ロンドン", "c.キャンベラ", "d.名古屋"],
    correct: "a.ローマ",
  },
];

let correctPoint = 0;
let answerNumber = 0;

//正解・不正解の判定、表示
const judge = (e, i, correctBox) => {
  const correct = quiz[i].correct;
  correctBox.className = `correctBox_${i}`;

  if (correct === e.target.textContent) {
    correctBox.textContent = "正解";
    correctPoint++;
  } else {
    correctBox.textContent = "不正解";
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
    localStorage.setItem("correctPoint", correctPoint);
    localStorage.setItem("quizLength", quizLength);
  }
};

//結果を見る→正解数をlocalStorageで保存
