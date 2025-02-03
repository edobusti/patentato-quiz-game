import { useQuiz } from "../../contexts/QuizContext";

export default function Statistics() {
  const { totalAnswers, totalErrors, status } = useQuiz();
  return (
    <div className="statistics">
      <p>
        Domanda n.{" "}
        <span>{status === "newQuiz" ? totalAnswers + 1 : totalAnswers}</span>
      </p>
      <p>
        Errori: <span>{totalErrors}</span>
      </p>
    </div>
  );
}
