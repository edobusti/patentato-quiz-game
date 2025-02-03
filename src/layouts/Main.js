import { useQuiz } from "../contexts/QuizContext";

import StartScreen from "./Main/StartScreen";

import Loader from "../components/ui/Loader";

import QuizScreen from "./Main/QuizScreen";

import FinishScreen from "./Main/FinishScreen";

export default function Main() {
  const { status } = useQuiz();

  return (
    <div className="main">
      {(status === "standBy" || status === "ready") && <StartScreen />}

      {status === "loading" && <Loader />}

      {(status === "newQuiz" || status === "answered") && <QuizScreen />}

      {(status === "failure" || status === "success") && <FinishScreen />}
    </div>
  );
}
