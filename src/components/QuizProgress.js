import ProgressBar from "./ui/ProgressBar";
import Statistics from "./ui/Statistics";

export default function QuizProgress() {
  return (
    <div className="progress__container">
      <ProgressBar />
      <Statistics />
    </div>
  );
}
