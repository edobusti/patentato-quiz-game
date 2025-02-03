export default function GameModeItem({
  onSelectMode,
  imgMode,
  iconMode,
  btnText,
  numQuestions,
  numErrors,
  totMinutes,
}) {
  return (
    <>
      <img className="img__mode" src={imgMode} alt=""></img>
      <div className="rules">
        <p className="questions">
          <span>Totale</span> <span>Tot.</span> {numQuestions} domande
        </p>
        <p className="errors">
          <span>Errori</span> <span>Err.</span> {numErrors}{" "}
          {numErrors > 0 ? "consentiti" : "disponibili"}
        </p>
        <p className="time">
          <span>Tempo</span> <span>Max.</span> {totMinutes} minuti
        </p>
      </div>
      <button className="btn__mode" onClick={onSelectMode}>
        <img src={iconMode} alt=""></img>
        {btnText}
      </button>
    </>
  );
}
