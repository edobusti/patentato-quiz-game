import FinishHeader from "../../components/FinishHeader";
import FinishResume from "../../components/FinishResume";

export default function Finish() {
  return (
    <div className="overlay__container">
      <div className="finish__window">
        <FinishHeader />
        <FinishResume />
      </div>
    </div>
  );
}
