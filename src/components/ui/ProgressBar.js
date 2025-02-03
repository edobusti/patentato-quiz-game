import { useQuiz } from "../../contexts/QuizContext";

export default function ProgressBar() {
  const { maxQuestions, totalAnswers, status } = useQuiz();
  return (
    <progress
      max={maxQuestions}
      value={status === "newQuiz" ? totalAnswers + 1 : totalAnswers}
    ></progress>
  );
}
