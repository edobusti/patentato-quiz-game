import QuizDetails from "./ui/QuizDetails";
import QuizImage from "./ui/QuizImage";

export default function QuizMain() {
  return (
    <div className="quiz__main">
      <QuizImage />
      <QuizDetails />
    </div>
  );
}
