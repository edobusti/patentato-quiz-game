import { useQuiz } from "../../contexts/QuizContext";
import QuizProgress from "../../components/QuizProgress";
import QuizMain from "../../components/QuizMain";

export default function Quiz() {
  const { maxQuestions, totalAnswers, maxErrors, totalErrors, dispatch } =
    useQuiz();

  return (
    <div className="quiz-container">
      <>
        {totalErrors > maxErrors && dispatch({ type: "lost", payload: "" })}
        {totalAnswers === maxQuestions &&
          totalErrors <= maxErrors &&
          dispatch({ type: "won", payload: "" })}
        <QuizProgress />
        <QuizMain />
      </>
    </div>
  );
}
