import { useQuiz } from "../../contexts/QuizContext";

import startGameIcon from "../../img/start-btn-icon.png";

export default function StartButton() {
  const { dispatch } = useQuiz();

  const handleStart = () => dispatch({ type: "start", payload: "" });

  return (
    <button className="btn__start" onClick={handleStart}>
      <img src={startGameIcon} alt=""></img>INIZIA IL TEST
    </button>
  );
}
