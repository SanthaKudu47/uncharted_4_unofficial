import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { puzzleOneCardAnimation } from "../helpers";

let isRotating = false;
let timerRef: number | undefined = undefined;
let isPuzzleDoneGlobal = false;
let isLastAnimationDone = false;
let isWinCalled = false;

function P1Card({
  isPuzzleDone = false,
  setDirectionStatus,
  runAfterPuzzleOneMatchFound,
  ImageCmp,
  InnerCmp,
  id,
}: {
  isPuzzleDone: boolean;
  setDirectionStatus: () => void;
  runAfterPuzzleOneMatchFound: () => void;
  ImageCmp: React.ReactNode;
  InnerCmp: React.ReactNode;
  id: string;
}) {
  const [rotatedAmount, setRotation] = useState(0);
  const cardRef = useRef<SVGAElement>(null);
  isPuzzleDoneGlobal = isPuzzleDone;

  const cardDirectionHandler = function () {
    if (isLastAnimationDone) return;
    if (isRotating === true) return;
    setDirectionStatus();
    setRotation(rotatedAmount + 90);
    isRotating = true;
  };

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current as SVGAElement;
    card.classList.add("p1_card_cls");

    card.addEventListener("transitionend", cardRotationAnimationEndHandler);

    return () => {
      card.removeEventListener(
        "transitionend",
        cardRotationAnimationEndHandler
      );
    };
  }, []);

  function cardRotationAnimationEndHandler() {
    isRotating = false;
    clearTimeout(timerRef);
    if (isLastAnimationDone) {
      if (!isWinCalled) {
        winCallBack();
      }

      return;
    }
    timerRef = setTimeout(() => {
      clearTimeout(timerRef);
      if (isPuzzleDoneGlobal) {
        animateCards();
      }
    }, 1500);
  }

  function animateCards() {
    puzzleOneCardAnimation("p1_card");
    isLastAnimationDone = true;
  }

  function winCallBack() {
    isWinCalled = true;
    runAfterPuzzleOneMatchFound();
  }

  return (
    <>
      <g
        ref={cardRef}
        id={id}
        className={`cursor-pointer p1_card`}
        style={{
          transform: `rotate(${rotatedAmount}deg) translateX(0px)`,
        }}
        onClick={cardDirectionHandler}
      >
        {/* <rect
          id="light_layer"
          x="780.5"
          y="664.5"
          width="253"
          height="253"
          fill="#D9D9D9"
          className="hover:stroke-red-400"
        /> */}

        {InnerCmp}
        {ImageCmp}
      </g>
    </>
  );
}

export { P1Card };
