export type QuizData = {
  quizName: string;
  quizTitle: string;
  finalJudge: boolean;
  status: string;
  correctCount: number;
  question: {
    questionNumber: string;
    id: string;
    question: string;
    answers: string[];
    correct: string;
    yourAnswer: null;
    judge: null;
  }[];
}[];

export type Question = {
  questionNumber: string;
  id: string;
  question: string;
  answers: string[];
  correct: string;
  yourAnswer: string | null;
  judge: string | null;
};

export type QuizAnswerProps = {
  answer: string;
  quiz: Question;
  isSelected: boolean;
  buttonDisabled: () => void;
  showJudgeFunction: (quiz: Question) => void;
};
export type QuizAnswersProps = {
  quiz: Question;
};
