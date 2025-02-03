import { useState, useRef, useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";

import trueIcon from "../../img/answer-true-icon.png";
import falseIcon from "../../img/answer-false-icon.png";
import answerFeedbackWrongIcon from "../../img/answer-feedback-wrong.svg";
import answerFeedbackCorrectIcon from "../../img/answer-feedback-correct.svg";
import nextQuizArrow from "../../img/next-quiz-arrow.svg";

export default function QuizDetails() {
  const { status } = useQuiz();
  return (
    <div className="quiz__question-section">
      <Question />
      <AnswerContainer>
        {status === "newQuiz" && (
          <>
            <AnswerButtons />
          </>
        )}
        {status === "answered" && (
          <>
            <AnswerFeedback />
          </>
        )}
      </AnswerContainer>
      <Timer />
    </div>
  );
}

function Question() {
  const { quiz } = useQuiz();

  return <h1 className="quiz__question">{quiz.question}</h1>;
}

function AnswerContainer({ children }) {
  return <div className="answer__container">{children}</div>;
}

function AnswerButtons() {
  const { dispatch } = useQuiz();
  return (
    <>
      <img
        className="trueIcon"
        src={trueIcon}
        alt="true?"
        onClick={() => dispatch({ type: "newAnswer", payload: true })}
      ></img>
      <img
        className="falseIcon"
        src={falseIcon}
        alt="false?"
        onClick={() => dispatch({ type: "newAnswer", payload: false })}
      ></img>
    </>
  );
}

function AnswerFeedback() {
  const { quiz, userAnswer } = useQuiz();

  return (
    <div className="answer-feedback__container">
      {userAnswer.toString() === quiz?.correctAnswer.toString() ? (
        <div className="answer-feedback-correct">
          Corretto <img src={answerFeedbackCorrectIcon} alt="correct"></img>
        </div>
      ) : (
        <div className="answer-feedback-wrong">
          Sbagliato <img src={answerFeedbackWrongIcon} alt="wrong"></img>
        </div>
      )}
      <NextQuizButton />
    </div>
  );
}

function NextQuizButton() {
  const { dispatch, getRandomQuiz } = useQuiz();

  return (
    <div
      className="btn__next-quiz"
      onClick={() => dispatch({ type: "newQuiz", payload: getRandomQuiz })}
    >
      AVANTI
      <img src={nextQuizArrow} alt=""></img>
    </div>
  );
}

function Timer() {
  const { maxMinutes, dispatch } = useQuiz();

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return ` ${minutes} : ${seconds}`;
  };

  const [countdown, setCountdown] = useState(Number(maxMinutes * 60));
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      dispatch({ type: "timerStop", payload: "off" });
    }
  }, [countdown, dispatch]);

  return (
    <p className="quiz__timer">
      Tempo rimanente:
      <span
        className={
          Math.floor(countdown < maxMinutes * 60 * 0.25)
            ? "quarter-time"
            : Math.floor(countdown < maxMinutes * 60 * 0.5)
            ? "half-time"
            : "second-half-time"
        }
      >
        {formatTime(countdown)}
      </span>
    </p>
  );
}
