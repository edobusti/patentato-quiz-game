import { useQuiz } from "../../contexts/QuizContext";

import questionMarkImg from "../../img/question-mark.png";

export default function QuizImage() {
  const { quiz } = useQuiz();

  return (
    <img
      className="quiz__img"
      src={quiz.img ? quiz.img : questionMarkImg}
      alt="img"
    ></img>
  );
}
