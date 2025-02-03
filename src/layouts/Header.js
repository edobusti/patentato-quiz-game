import logo from "../img/logo.png";
import logoEasyMode from "../img/logo-easy.png";
import logoNormalMode from "../img/logo-normal.png";
import logoHardMode from "../img/logo-hard.png";

import { useQuiz } from "../contexts/QuizContext";
function Logo() {
  const { gameMode } = useQuiz();

  return (
    <img
      className="logo"
      src={
        gameMode === "easy"
          ? logoEasyMode
          : gameMode === "normal"
          ? logoNormalMode
          : gameMode === "hard"
          ? logoHardMode
          : logo
      }
      alt="logo"
    ></img>
  );
}

export default Logo;
