import { ReactNode, useEffect, useRef, useState } from "react";

import "./styles.css";
import { puzzleTwoCardAnimation } from "../../helpers";

let isPuzzleCardRotating = false;
let puzzleTimerRef: number | undefined = undefined;
let isLastAnimationDone = false;
let isPuzzleCompleted = false;
let isPuzzleCardsAreMatchingGlobal = false;

export default function CardWrapper({
  children,
  active = false,
  isPuzzleCardsAreMatching = false,
  runAfterPuzzleMatchFound,
  setDirectionStatus,
  card_position: card_position,
}: {
  children: ReactNode;
  active: boolean;
  isPuzzleCardsAreMatching: boolean;
  runAfterPuzzleMatchFound: () => void;
  setDirectionStatus: () => void;
  card_position: string;
}) {
  isPuzzleCardsAreMatchingGlobal = isPuzzleCardsAreMatching;
  const [rotatedAmount, setRotation] = useState(0);
  const cardRef = useRef<SVGAElement>(null);
  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current as SVGAElement;
    card.classList.add("puzzle_card");
    card.addEventListener("transitionend", puzzleCardRotationEndHandler);
    return () => {
      card.removeEventListener("transitionend", puzzleCardRotationEndHandler);
    };
  }, []);

  function puzzleCardRotationEndHandler() {
    isPuzzleCardRotating = false;
    clearTimeout(puzzleTimerRef);
    if (isLastAnimationDone) {
      if (!isPuzzleCompleted) {
        executeCallBackAfterWin();
      }
      return;
    }
    puzzleTimerRef = setTimeout(() => {
      clearTimeout(puzzleTimerRef);
      if (isPuzzleCardsAreMatchingGlobal) {
        animateCards();
      }
    }, 1500);
  }

  const cardDirectionHandler = function () {
    if (!active) return;
    if (isLastAnimationDone) return;
    if (isPuzzleCardRotating === true) return;
    setDirectionStatus();
    setRotation(rotatedAmount + 90);
    isPuzzleCardRotating = true;
  };

  function animateCards() {
    puzzleTwoCardAnimation("puzzle_card");
    isLastAnimationDone = true;
  }
  function executeCallBackAfterWin() {
    isPuzzleCompleted = true;
    runAfterPuzzleMatchFound();
  }

  return (
    <g
      data-card_position={card_position}
      ref={cardRef}
      onClick={cardDirectionHandler}
      className="puzzle_card cursor-pointer"
      style={{
        transform: `rotate(${rotatedAmount}deg) translateX(0px)`,
      }}
    >
      {children}
    </g>
  );
}
