"use client";
import styles from "@/app/result/index.module.css";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const quizTitle = useSearchParams().get("title");

  const cookieData: string | undefined = Cookies.get(`title=${quizTitle}`);
  const quiz = JSON.parse(cookieData!);

  const quizCount = quiz[0].question.length;
  const correctCount = quiz[0].correctCount;
  const finalJudge = quiz[0].finalJudge;

  return (
    <div className={styles.answer_result_wrap}>
      <h2 className={styles.answer_result}>結果</h2>
      <h3 className={styles.answer_result}>{finalJudge ? "合格" : "不合格"}</h3>
      <div className={styles.answer_result_text}>
        あなたは{quizCount}問中 {correctCount}問 正解しました
      </div>
      <div id="answer_detail"></div>
      <a href="/" className={`${styles.answer_result_title} btn`}>
        ホームへ戻る
      </a>
    </div>
  );
}
