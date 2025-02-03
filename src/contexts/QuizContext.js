import { createContext, useContext, useReducer } from "react";

import quizPatenteB2023 from "../quizPatenteB2023.json";

import reducer from "../hooks/reducer";

const QuizContext = createContext();

const initialState = {
  quiz: [],
  answeredQuiz: [],
  gameMode: "",
  maxQuestions: 0,
  maxErrors: 0,
  userAnswer: null,
  maxMinutes: 0,
  timerStatus: "off",
  totalAnswers: 0,
  totalErrors: 0,
  status: "standBy",
};

const getRandomQuiz = () => {
  const obj = JSON.parse(JSON.stringify(quizPatenteB2023));
  const totalSections = Object.keys(obj).length;
  const randomSection =
    Object.entries(obj)[Math.floor(Math.random() * totalSections)][1];
  const totalArguments = Object.keys(randomSection).length;
  const randomArgument =
    Object.entries(randomSection)[Math.floor(Math.random() * totalArguments)];
  const argumentArray = Object.entries(randomArgument)[1][1];
  const randomQuiz =
    argumentArray[Math.floor(Math.random() * argumentArray.length)];

  console.log(randomQuiz);

  return {
    img: randomQuiz.img === undefined ? null : require(`.${randomQuiz.img}`),
    question: randomQuiz.q,
    correctAnswer: randomQuiz.a,
  };
};

function QuizProvider({ children }) {
  const [
    {
      quiz,
      answeredQuiz,
      gameMode,
      maxQuestions,
      maxMinutes,
      maxErrors,
      userAnswer,
      totalAnswers,
      totalErrors,
      timerStatus,
      status,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        quiz,
        getRandomQuiz,
        answeredQuiz,
        gameMode,
        maxQuestions,
        maxMinutes,
        maxErrors,
        userAnswer,
        totalAnswers,
        totalErrors,
        timerStatus,
        status,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext used outside the QuizProvider");

  return context;
}

export { QuizProvider, useQuiz };
