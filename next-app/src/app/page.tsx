"use client";
import Cookies from "js-cookie";
import { quizzes } from "../lib/quizzes";
import styles from "./page.module.css";

export default function Home() {
  const allQuizData = quizzes.map((question) => {
    const cookieId = question[0].quizTitle;
    const cookieData = Cookies.get(cookieId);

    if (cookieData === undefined) {
      // cookieに初期値を設定する
      const quizDataJson = JSON.stringify(question);
      console.log(quizDataJson);
      console.log(question);

      Cookies.set(cookieId, quizDataJson, { expires: 7 });
    }

    return JSON.parse(Cookies.get(cookieId));
  });

  return (
    <section className={styles.quiz_box}>
      <div className={styles.my_icon}></div>
      <p className={styles.my_name}>太郎</p>
      <div id="question-wrapper">
        <div>
          <h2>学習記録</h2>
          {allQuizData.map((data, i) => (
            <div key={i} className={styles.question_box}>
              <p className={styles.question_box_name}>{data[0].quizName}</p>
              <p className={styles.question_box_status}>{data[0].status}</p>
              <p className={styles.question_box_result}>
                {data[0].question.length}問中 {data[0].correctCount}問 正解
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2>問題をとく</h2>
          {allQuizData.map((data, i) => (
            <a key={i} href={`/question/?${data[0].quizTitle}`} className={styles.question_link}>
              {data[0].quizName}
            </a>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
}