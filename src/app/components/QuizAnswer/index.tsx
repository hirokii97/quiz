import { Question, QuizAnswerProps } from "@/app/type";
import { useState } from "react";
import styles from "@/app/components/QuizAnswer/index.module.css";

export default function Home(props: QuizAnswerProps) {
  const { answer, quiz, isSelected, buttonDisabled, showJudgeFunction } = props;

  const answerButton = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent, quiz: Question) => {
    quiz.yourAnswer = e.currentTarget.textContent;
    e.currentTarget.classList.add("selected");
    buttonDisabled();

    if (e.currentTarget.textContent === quiz.correct) {
      quiz.judge = "正解!!";
    } else {
      quiz.judge = "不正解・・ドンマイ！";
    }
    showJudgeFunction(quiz);
  };

  return (
    <>
      <button disabled={isSelected} className={`${styles.answer}`} onClick={(e) => answerButton(e, quiz)}>
        {answer}
      </button>
    </>
  );
}
