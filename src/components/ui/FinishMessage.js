import { useQuiz } from "../../contexts/QuizContext";

export default function FinishMessage({
  descriptionFailure,
  descriptionSuccess,
}) {
  const { status } = useQuiz();
  return (
    <>
      <h1
        className={
          status === "failure"
            ? "finish__title-success"
            : "finish__title-failure"
        }
      >
        {status === "failure" ? "Bocciato" : "Promosso"}!
      </h1>
      <p className="finish__description">
        {status === "failure" ? descriptionFailure : descriptionSuccess}
      </p>
    </>
  );
}
