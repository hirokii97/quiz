"use client";

import { quizzes } from "@/lib/quizzes";
import { QuizData } from "../type";
import QuizWrap from "@/app/components/QuizWrap";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // URLから問題名取得
  const quizTitle = useSearchParams().get("title");

  // 表示する問題を絞り込み
  const quizData: QuizData = quizzes.filter((quiz) => {
    return quiz[0].quizTitle === `title=${quizTitle}`;
  })[0];

  // 結果を見るのボタンの処理
  // to do 全て回答したら表示
  const saveQuizData = () => {
    quizData[0].status = "回答済み";

    let correctCount = 0;
    quizData[0].question.map((quiz) => {
      if (quiz.judge === "正解!!") {
        correctCount++;
      }
      return correctCount;
    });

    // 正答率75%以上で合格
    const quizCount = quizData[0].question.length;

    if ((correctCount / quizCount) * 100 >= 75) {
      quizData[0].finalJudge = true;
    }

    quizData[0].correctCount = correctCount;

    const quizDataJson = JSON.stringify(quizData);
    Cookies.set(quizData[0].quizTitle, quizDataJson);
  };
  return (
    <section className="quiz_box">
      <h1>問題</h1>
      <QuizWrap quizData={quizData} />
      <br />
      <a className="btn" onClick={saveQuizData} id="toResult" href={`/result/?${quizData[0].quizTitle}`}>
        結果を見る
      </a>
    </section>
  );
}
