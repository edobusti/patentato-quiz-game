import { useQuiz } from "../../contexts/QuizContext";

export default function FinishImage({ failureImages, successImages }) {
  const { status } = useQuiz();
  return (
    <img
      src={
        status === "failure"
          ? failureImages[Math.floor(Math.random() * failureImages.length)]
          : successImages[Math.floor(Math.random() * successImages.length)]
      }
      alt="end-img"
    ></img>
  );
}
