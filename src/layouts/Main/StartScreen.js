import Introduction from "../../components/ui/Introduction";
import GameModeSection from "../../components/GameModeSection";

export default function Start() {
  return (
    <div className="start-screen">
      <Introduction />
      <GameModeSection />
    </div>
  );
}
