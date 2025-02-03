import { useState, useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";

export default function Loader() {
  const { dispatch, getRandomQuiz } = useQuiz();

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "newQuiz", payload: getRandomQuiz });
    }, 3000);
  }, [dispatch, getRandomQuiz]);
  return <div className="countdown">{counter}</div>;
}
