"use strict";
//参考サイト
//https://www.giv.co.jp/member_tweet/2156/

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
];

let quizCount = 0;
const quizLength = quiz.length;

const $button = document.querySelectorAll(".answer");
const buttonLength = $button.length;

const setQuestion = () => {
  let buttonCount = 0;
  document.getElementById("js-number").textContent = quiz[quizCount].questionNumber;
  document.getElementById("js-question").textContent = quiz[quizCount].question;

  while (buttonCount < buttonLength) {
    $button[buttonCount].textContent = quiz[quizCount].answers[buttonCount];
    buttonCount++;
  }
};
setQuestion();

let clickedCount = 0;
let score = 0;
while (clickedCount < buttonLength) {
  $button[clickedCount].addEventListener("click", (e) => {
    const answerResult = document.querySelector('.answer_result')
    const answerResultText = document.querySelector(".answer_result_text");
    const clickedAnswer = e.currentTarget;
    if (quiz[quizCount].correct === clickedAnswer.textContent) {
      score++;
    }
    quizCount++;
    if (quizCount < quizLength) {
      setQuestion();
    } else {
      answerResult.classList.add('active_result')
      answerResultText.textContent = "終了！あなたの正解数は" + score + "/" + quizLength + "です！";
    }
  });
  clickedCount++;
}
