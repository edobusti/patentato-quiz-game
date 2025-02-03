import { useQuiz } from "./contexts/QuizContext";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default function App() {
  const {
    quiz,
    userAnswer,

    status,
  } = useQuiz();

  return (
    <div
      className={`App ${
        status === "answered" &&
        userAnswer.toString() === quiz.correctAnswer.toString()
          ? "correct"
          : status === "answered" &&
            userAnswer.toString() !== quiz.correctAnswer.toString()
          ? "wrong"
          : status === "newQuiz" && ""
      }`}
    >
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
