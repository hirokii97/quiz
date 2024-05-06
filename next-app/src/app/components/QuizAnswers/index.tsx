import QuizAnswer from "@/app/components/QuizAnswer";
import styles from "@/app/components/QuizAnswers/index.module.css";

import { Question, QuizAnswersProps, QuizData } from "@/app/type";
import { useState } from "react";

// export default function Home(props: Question) {
export default function Home(props: QuizAnswersProps) {
  const { quiz } = props;
  const answers = quiz.answers;

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [judgeText, setJudgeText] = useState<string | null>(null);
  const [judgeClass, setJudgeClass] = useState<string>("");

  const buttonDisabled = () => {
    setIsSelected(true);
  };
  const showJudgeFunction = (quiz: Question) => {
    setJudgeText(quiz.judge);

    if (quiz.judge === "正解!!") {
      setJudgeClass("judge_correct");
    } else {
      setJudgeClass("judge_false");
    }
  };

  return (
    <>
      {answers.map((answer: string, index: number) => (
        <div key={index}>
          <div className={styles.answerBox}>
            <QuizAnswer buttonDisabled={buttonDisabled} showJudgeFunction={showJudgeFunction} isSelected={isSelected} answer={answer} quiz={quiz} />
          </div>
        </div>
      ))}
      <div className={`${styles.correctBox} ${judgeClass}`}>{judgeText}</div>
    </>
  );
}
