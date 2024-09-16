import { useEffect, useRef, useState } from "react";
import CardOne from "./Card1";
import CardTwo from "./Card2";
import CardThree from "./Card3";
import CardWrapper from "./CardWrapper";

import "./styles.css";

type Steps = "left" | "middle" | "right";

export default function PuzzleTwo({
  step = "left",
  isPuzzleTwoCardsAreMatching = false,
  runAfterPuzzleTwoMatchFound,
  setDirectionStatus,
  allDoneCaller,
}: {
  step: Steps;
  isPuzzleTwoCardsAreMatching: boolean;
  runAfterPuzzleTwoMatchFound: () => void;
  setDirectionStatus: (cardId: "card1" | "card2" | "card3") => void;
  allDoneCaller: () => void;
}) {
  const [isPuzzleEnabled, setEnable] = useState(false);
  const stepClass =
    step == "left" ? "before" : step == "middle" ? "init" : "after";
  const ref = useRef<SVGAElement>(null);
  useEffect(() => {
    const puzzle = ref.current;
    if (!puzzle) return;

    const transitionendHandler = function () {
      const ele = puzzle as SVGAElement;
      const isClassContains = ele.classList.contains("after");

      if (step === "left") {
        //initial
        setEnable(true);
      }

      if (isClassContains) {
        allDoneCaller();
      }
    };

    puzzle.addEventListener("transitionend", transitionendHandler);
    return () => {
      puzzle.removeEventListener("transitionend", transitionendHandler);
    };
  }, []);

  return (
    <>
      <g id="puzzleTwo" className={`puzzle_2_wrapper ${stepClass}`} ref={ref}>
        <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleTwoCardsAreMatching={isPuzzleTwoCardsAreMatching}
          runAfterPuzzleTwoMatchFound={runAfterPuzzleTwoMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card1");
          }}
          card_position="1"
        >
          <CardOne />
        </CardWrapper>
        <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleTwoCardsAreMatching={isPuzzleTwoCardsAreMatching}
          runAfterPuzzleTwoMatchFound={runAfterPuzzleTwoMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card2");
          }}
          card_position="2"
        >
          <CardTwo />
        </CardWrapper>
        <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleTwoCardsAreMatching={isPuzzleTwoCardsAreMatching}
          runAfterPuzzleTwoMatchFound={runAfterPuzzleTwoMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card3");
          }}
          card_position="3"
        >
          <CardThree />
        </CardWrapper>
      </g>
    </>
  );
}
