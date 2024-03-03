"use strict";

const correctPoint = localStorage.getItem("correctPoint");
const quizLength = localStorage.getItem("quizLength");

const result = document.getElementById('answer_result')
const correctRate = (correctPoint / quizLength) * 100

if(correctRate >= 75){
  result.textContent = '合格！'
}else{
  result.textContent = '不合格'
}

const resultDetail = document.getElementById("answer_result_text");
resultDetail.textContent = `あなたは${correctPoint} / ${quizLength}問 正解しました`;

