import { ReactNode, useEffect, useRef, useState } from "react";

import "./styles.css";
import { puzzleCardsAnimation } from "../../helpers";
import { globals } from "../../helpers/global";

export default function CardWrapper({
  children,
  active = false,
  isPuzzleCardsAreMatching = false,
  runAfterPuzzleMatchFound,
  setDirectionStatus,
  card_position: card_position,
  puzzleCardName = "1",
  puzzleId = "1",
}: {
  children: ReactNode;
  active: boolean;
  isPuzzleCardsAreMatching: boolean;
  runAfterPuzzleMatchFound: () => void;
  setDirectionStatus: () => void;
  card_position: string;
  puzzleCardName: string;
  puzzleId: string;
}) {
  globals[puzzleId].isPuzzleCardsAreMatchingGlobal = isPuzzleCardsAreMatching;
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
    globals[puzzleId].isPuzzleCardRotating = false;
    clearTimeout(globals[puzzleId].puzzleTimerRef);
    if (globals[puzzleId].isLastAnimationDone) {
      if (!globals[puzzleId].isPuzzleCompleted) {
        executeCallBackAfterWin();
      }
      return;
    }
    globals[puzzleId].puzzleTimerRef = setTimeout(() => {
      clearTimeout(globals[puzzleId].puzzleTimerRef);
      if (globals[puzzleId].isPuzzleCardsAreMatchingGlobal) {
        animateCards();
      }
    }, 1500);
  }

  const cardDirectionHandler = function () {
    if (!active) return;
    if (globals[puzzleId].isLastAnimationDone) return;
    if (globals[puzzleId].isPuzzleCardRotating === true) return;
    setDirectionStatus();
    setRotation(rotatedAmount + 90);
    globals[puzzleId].isPuzzleCardRotating = true;
  };

  function animateCards() {
    puzzleCardsAnimation(puzzleCardName, 2);
    globals[puzzleId].isLastAnimationDone = true;
  }
  function executeCallBackAfterWin() {
    globals[puzzleId].isPuzzleCompleted = true;
    runAfterPuzzleMatchFound();
  }

  return (
    <g
      data-card_position={card_position}
      ref={cardRef}
      onClick={cardDirectionHandler}
      className={`puzzle_card ${puzzleCardName} cursor-pointer`}
      style={{
        transform: `rotate(${rotatedAmount}deg) translateX(0px)`,
      }}
    >
      {children}
    </g>
  );
}
