import { useQuiz } from "../contexts/QuizContext";

import GameModeItem from "./ui/GameModeItem";
import StartButton from "./ui/StartButton";

import easyImg from "../img/mode-meme-1.png";
import easyIcon from "../img/easy-icon.png";
import normalImg from "../img/mode-meme-2.jpg";
import normalIcon from "../img/normal-icon.png";
import hardImg from "../img/mode-meme-3.png";
import hardIcon from "../img/hard-icon.png";

export default function GameModeItems() {
  const { gameMode, status, dispatch } = useQuiz();

  const handleSelectEasyMode = () => {
    if (window.innerWidth <= 720) {
      dispatch({ type: "easyMode", payload: "easy" });
      dispatch({ type: "start", payload: "" });
    } else {
      dispatch({ type: "easyMode", payload: "easy" });
    }
  };

  const handleSelectNormalMode = () => {
    if (window.innerWidth <= 720) {
      dispatch({ type: "normalMode", payload: "normal" });
      dispatch({ type: "start", payload: "" });
    } else {
      dispatch({ type: "normalMode", payload: "normal" });
    }
  };

  const handleSelectHardMode = () => {
    if (window.innerWidth <= 720) {
      dispatch({ type: "hardMode", payload: "hard" });
      dispatch({ type: "start", payload: "" });
    } else {
      dispatch({ type: "hardMode", payload: "hard" });
    }
  };

  return (
    <>
      <div className="btn__mode-section">
        <div
          className={`btn__mode-container ${
            gameMode === "easy" && "easy-active"
          } `}
        >
          <GameModeItem
            onSelectMode={handleSelectEasyMode}
            imgMode={easyImg}
            iconMode={easyIcon}
            numQuestions={25}
            numErrors={4}
            totMinutes={30}
            btnText={"PRINCIPIANTE"}
          />
        </div>

        <div
          className={`btn__mode-container ${
            gameMode === "normal" && "normal-active"
          } `}
        >
          <GameModeItem
            onSelectMode={handleSelectNormalMode}
            imgMode={normalImg}
            iconMode={normalIcon}
            numQuestions={20}
            numErrors={2}
            totMinutes={20}
            btnText={"INTERMEDIO"}
          />
        </div>
        <div
          className={`btn__mode-container ${
            gameMode === "hard" && "hard-active"
          } `}
        >
          <GameModeItem
            onSelectMode={handleSelectHardMode}
            imgMode={hardImg}
            iconMode={hardIcon}
            numQuestions={10}
            numErrors={0}
            totMinutes={10}
            btnText={"ESPERTO"}
          />
        </div>
      </div>
      {status === "ready" && <StartButton gameMode={gameMode} />}
    </>
  );
}
