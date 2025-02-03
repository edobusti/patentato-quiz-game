import { useQuiz } from "../contexts/QuizContext";

import FinishImage from "./ui/FinishImage";
import FinishMessage from "./ui/FinishMessage";
import FinishButton from "./ui/FinishButton";

import lostImgDicaprio from "../img/lost-meme-dicaprio.jpg";
import lostImgElRisitas from "../img/lost-meme-el-risitas.jpg";
import lostImgGoodfellas from "../img/lost-meme-goodfellas.jpg";
import lostImgWojackMask from "../img/lost-meme-wojack-mask.jpg";
import lostImgJackieChan from "../img/lost-meme-jackie-chan.jpg";
import lostImgCry from "../img/failed-meme-cry.png";
import lostImgHandFace from "../img/lost-meme-hand-face.jpg";
import wonImgGigachad from "../img/won-meme-gigachad.png";
import wonImgDicaprio from "../img/won-meme-dicaprio.jpg";

export default function FinishHeader() {
  const { maxQuestions, maxErrors, totalAnswers, totalErrors, timerStatus } =
    useQuiz();

  const failFirstHalfImages = [
    lostImgDicaprio,
    lostImgElRisitas,
    lostImgGoodfellas,
    lostImgWojackMask,
  ];

  const failSecondHalfImages = [lostImgJackieChan, lostImgCry, lostImgHandFace];

  const failFirstHalfEmojis = ["😂", "🤦‍♂️", "😵", "🤣", "😅", "🧐", "😶"];
  const randomFirstHalfEmoji = Math.floor(
    Math.random() * failFirstHalfEmojis.length
  );

  const failSecondHalfEmojis = ["🤞", "😌", "🙇‍♂️", "🥸"];
  const randomSecondHalfEmoji = Math.floor(
    Math.random() * failSecondHalfEmojis.length
  );

  const descriptionFailure = `${
    timerStatus === "off"
      ? `Tempo scaduto! Dovevi rispondere correttamente ad almeno ${
          maxQuestions - maxErrors
        } domande! 🐌`
      : `${
          maxErrors === 0
            ? `${
                totalAnswers === 1
                  ? `Alla prima domanda?? Torna sul manuale 🤡`
                  : totalAnswers < 5
                  ? `K.O. dopo ${totalAnswers} domande... non eri un esperto? ${failFirstHalfEmojis[randomFirstHalfEmoji]}`
                  : ` ${
                      totalAnswers < 8
                        ? `${totalAnswers} giuste non bastano, qui è richiesta perfezione.`
                        : "Non c'è margine di errore!"
                    } ${failSecondHalfEmojis[randomSecondHalfEmoji]}  `
              }`
            : `${
                totalAnswers - 1 === maxErrors
                  ? `Sei riuscito a sbagliarle tutte in un colpo, spero tu non abbia già la patente ${failFirstHalfEmojis[randomFirstHalfEmoji]}`
                  : totalAnswers < maxQuestions * 0.5
                  ? `${
                      totalAnswers < maxQuestions * 0.25
                        ? `Hai aperto il manuale o hai fatto finta? ${failFirstHalfEmojis[randomFirstHalfEmoji]}`
                        : `Neanche a metà riesci ad arrivare? ${failFirstHalfEmojis[randomFirstHalfEmoji]}`
                    }
                    `
                  : `${
                      totalAnswers < maxQuestions * 0.75
                        ? `Stavi andando bene, ma ${totalErrors} errori sono troppi, torna a studiare! ${failSecondHalfEmojis[randomSecondHalfEmoji]}`
                        : `Mancava davvero poco, ma non è abbastanza 😌`
                    } `
              }`
        }`
  }`;

  const successImages = [wonImgGigachad, wonImgDicaprio];
  const successEmojis = ["😎", "🤑"];
  const randomSuccessEmoji =
    successEmojis[Math.floor(Math.random() * successEmojis.length)];

  const descriptionSuccessOptions = [
    `Sei pronto a sfrecciare senza cintura ${randomSuccessEmoji}`,
    `Complimenti! Ora dritto all'esame vero a farti bocciare ${randomSuccessEmoji} `,
  ];

  const descriptionSuccess =
    descriptionSuccessOptions[
      Math.floor(Math.random() * descriptionSuccessOptions.length)
    ];

  return (
    <>
      <FinishImage
        failureImages={
          totalAnswers < maxQuestions * 0.5
            ? failFirstHalfImages
            : failSecondHalfImages
        }
        successImages={successImages}
      />

      <div className="finish__details">
        <FinishMessage
          descriptionFailure={descriptionFailure}
          descriptionSuccess={descriptionSuccess}
        />

        <FinishButton />
      </div>
    </>
  );
}
