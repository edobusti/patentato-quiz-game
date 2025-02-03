import questionMarkImg from "../img/question-mark.png";
import { useQuiz } from "../contexts/QuizContext";

export default function FinishResume() {
  const { answeredQuiz } = useQuiz();
  return (
    <div className="resume__window">
      {answeredQuiz.map((item, index) => (
        <ResumeItem item={item} key={index} index={index} />
      ))}
    </div>
  );
}

function ResumeItem({ item, index }) {
  return (
    <div
      className={`answered-quiz__item ${
        item.correctA.toString() !== item.userA.toString()
          ? "success"
          : "failure"
      } `}
    >
      <ResumeItemImage item={item} />
      <ResumeItemDetails item={item} index={index} />
    </div>
  );
}

function ResumeItemImage({ item }) {
  return (
    <img
      className="answered-quiz__img"
      src={item.img ? item.img : questionMarkImg}
      alt="img"
    ></img>
  );
}
function ResumeItemDetails({ item, index }) {
  return (
    <div>
      <p>
        <span>Domanda n.{index + 1}:</span> {item.q}
      </p>
      <p>
        <span>La tua risposta:</span>
        {item.userA.toString() === "true" ? " Vero" : " Falso"}
      </p>
      <p>
        <span>Risposta corretta:</span>
        {item.correctA.toString() === "true" ? " Vero" : " Falso"}
      </p>{" "}
    </div>
  );
}
