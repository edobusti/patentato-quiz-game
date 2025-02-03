import nextQuizArrow from "../../img/next-quiz-arrow.svg";

export default function FinishButton() {
  return (
    <button onClick={() => window.location.reload()} className="btn__finish">
      TORNA ALLA HOME <img src={nextQuizArrow} alt=""></img>
    </button>
  );
}
