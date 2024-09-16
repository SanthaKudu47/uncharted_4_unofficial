import { ReactNode, useEffect, useRef, useState } from "react";

import "./styles.css";
import { puzzleTwoCardAnimation } from "../../helpers";

let isP2CardRotating = false;
let timerRefP2: number | undefined = undefined;
let isLastAnimationDoneP2 = false;
let isPuzzleTwoCompleted = false;
let isPuzzleTwoCardsAreMatchingGlobal = false;

export default function CardWrapper({
  children,
  active = false,
  isPuzzleTwoCardsAreMatching = false,
  runAfterPuzzleTwoMatchFound,
  setDirectionStatus,
  card_position: card_position,
}: {
  children: ReactNode;
  active: boolean;
  isPuzzleTwoCardsAreMatching: boolean;
  runAfterPuzzleTwoMatchFound: () => void;
  setDirectionStatus: () => void;
  card_position: string;
}) {
  isPuzzleTwoCardsAreMatchingGlobal = isPuzzleTwoCardsAreMatching;
  const [rotatedAmount, setRotation] = useState(0);
  const cardRef = useRef<SVGAElement>(null);
  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current as SVGAElement;
    card.classList.add("p2_card");

    card.addEventListener("transitionend", puzzle2CardRotationEndHandler);

    return () => {
      card.removeEventListener("transitionend", puzzle2CardRotationEndHandler);
    };
  }, []);

  function puzzle2CardRotationEndHandler() {
    console.log(isPuzzleTwoCardsAreMatching, isPuzzleTwoCardsAreMatchingGlobal);
    isP2CardRotating = false;
    clearTimeout(timerRefP2);
    if (isLastAnimationDoneP2) {
      if (!isPuzzleTwoCompleted) {
        executeCallBackAfterWin();
      }
      return;
    }
    timerRefP2 = setTimeout(() => {
      clearTimeout(timerRefP2);
      if (isPuzzleTwoCardsAreMatchingGlobal) {
        animateCards();
      }
    }, 1500);
  }

  const cardDirectionHandler = function () {
    if (!active) return;
    if (isLastAnimationDoneP2) return;
    if (isP2CardRotating === true) return;
    setDirectionStatus();
    setRotation(rotatedAmount + 90);
    isP2CardRotating = true;
  };

  function animateCards() {
    puzzleTwoCardAnimation("p2_card");
    isLastAnimationDoneP2 = true;
  }
  function executeCallBackAfterWin() {
    isPuzzleTwoCompleted = true;
    runAfterPuzzleTwoMatchFound();
  }

  return (
    <g
      data-card_position={card_position}
      ref={cardRef}
      onClick={cardDirectionHandler}
      className="p2_card cursor-pointer"
      style={{
        transform: `rotate(${rotatedAmount}deg) translateX(0px)`,
      }}
    >
      {children}
    </g>
  );
}
