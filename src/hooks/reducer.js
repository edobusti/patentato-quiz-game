export default function reducer(state, action) {
  switch (action.type) {
    case "easyMode":
      return {
        ...state,
        gameMode: action.payload,
        maxQuestions: 25,
        maxErrors: 4,
        maxMinutes: 30,
        status: "ready",
      };

    case "normalMode":
      return {
        ...state,
        gameMode: action.payload,
        maxQuestions: 20,
        maxErrors: 2,
        maxMinutes: 20,
        status: "ready",
      };

    case "hardMode":
      return {
        ...state,
        gameMode: action.payload,
        maxQuestions: 10,
        maxErrors: 0,
        maxMinutes: 10,
        status: "ready",
      };

    case "start":
      return {
        ...state,
        timerStatus: "on",
        status: "loading",
      };

    case "newQuiz":
      return {
        ...state,
        quiz: action.payload(),
        status: "newQuiz",
      };

    case "newAnswer":
      return {
        ...state,
        answeredQuiz: [
          ...state.answeredQuiz,
          {
            img: state.quiz.img,
            q: state.quiz.question,
            correctA: state.quiz.correctAnswer,
            userA: action.payload,
          },
        ],
        userAnswer: action.payload,
        totalAnswers: state.totalAnswers + 1,
        totalErrors:
          action.payload.toString() === state.quiz.correctAnswer.toString()
            ? state.totalErrors
            : state.totalErrors + 1,
        status: "answered",
      };

    case "lost":
      return {
        ...state,
        status: "failure",
      };

    case "won":
      return {
        ...state,
        status: "success",
      };

    case "timerStop":
      const correctQuestion = Array.from(
        state.answeredQuiz.filter(
          (item) => item.correctA.toString() === item.userA.toString()
        )
      );

      return {
        ...state,
        timerStatus: action.payload,
        status:
          correctQuestion.length >= state.maxQuestions - state.maxErrors
            ? "success"
            : "failure",
      };

    default:
      break;
  }
}
