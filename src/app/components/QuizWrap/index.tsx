import { QuizData } from "@/app/type";
import QuizAnswers from "../QuizAnswers";
import styles from "@/app/components/QuizWrap/index.module.css";

export default function Home(props: { quizData: QuizData }) {
  const quizData = props.quizData[0].question;

  return (
    <>
      {quizData.map((quiz) => (
        <div key={quiz.id} id="question-wrapper">
          <div className={styles.quiz}>
            <h2 className={styles.question_number}>{quiz.questionNumber}</h2>
            <p className={styles.question}>{quiz.question}</p>
            <QuizAnswers quiz={quiz} />
          </div>
        </div>
      ))}
    </>
  );
}
