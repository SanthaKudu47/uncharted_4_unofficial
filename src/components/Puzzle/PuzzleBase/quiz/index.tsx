import { ReactNode, useEffect, useRef, useState } from "react";
import CardWrapper from "../CardWrapper";

import "./styles.css";
import { cardIdType } from "../types";

type Steps = "left" | "middle" | "right";
export default function Quiz({
  step = "left",
  isPuzzleCardsAreMatching = false,
  runAfterPuzzleMatchFound: runAfterPuzzleOneMatchFound,
  setDirectionStatus,
  cards = [],
  puzzleId = "1",
}: {
  step: Steps;
  isPuzzleCardsAreMatching: boolean;
  runAfterPuzzleMatchFound: () => void;
  setDirectionStatus: (cardId: cardIdType) => void;
  cards: ReactNode[];
  puzzleId: string;
}) {
  const [isPuzzleEnabled, setEnable] = useState(false);
  const stepClass =
    step == "left" ? "before" : step == "middle" ? "init" : "after";
  const ref = useRef<SVGAElement>(null);
  useEffect(() => {
    const puzzle = ref.current;
    if (!puzzle) return;

    const transitionendHandler = function () {
      //const ele = puzzle as SVGAElement;
      //const isClassContains = ele.classList.contains("after");

      if (step === "left") {
        setEnable(true);
      }
    };

    puzzle.addEventListener("transitionend", transitionendHandler);
    return () => {
      puzzle.removeEventListener("transitionend", transitionendHandler);
    };
  }, []);

  return (
    <>
      <g
        id={`p_${puzzleId}`}
        className={`puzzle_wrapper ${stepClass}`}
        ref={ref}
      >
        {cards.map((card, index) => {
          const cardId =
            index === 0
              ? "card1"
              : index === 1
              ? "card2"
              : index === 2
              ? "card3"
              : index === 3
              ? "card4"
              : "card1";
          return (
            <CardWrapper
              puzzleCardName={`p_${puzzleId}_cards`}
              key={`index_${index}`}
              active={isPuzzleEnabled}
              isPuzzleCardsAreMatching={isPuzzleCardsAreMatching}
              runAfterPuzzleMatchFound={runAfterPuzzleOneMatchFound}
              setDirectionStatus={() => {
                setDirectionStatus(cardId);
              }}
              card_position={`${index + 1}`}
              puzzleId={puzzleId}
            >
              {card}
            </CardWrapper>
          );
        })}
        {/* <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleCardsAreMatching={isPuzzleOneCardsAreMatching}
          runAfterPuzzleMatchFound={runAfterPuzzleOneMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card1");
          }}
          card_position="1"
        >
          <CardOne />
        </CardWrapper>
        <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleCardsAreMatching={isPuzzleOneCardsAreMatching}
          runAfterPuzzleMatchFound={runAfterPuzzleOneMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card2");
          }}
          card_position="2"
        >
          <CardTwo />
        </CardWrapper>
        <CardWrapper
          active={isPuzzleEnabled}
          isPuzzleCardsAreMatching={isPuzzleOneCardsAreMatching}
          runAfterPuzzleMatchFound={runAfterPuzzleOneMatchFound}
          setDirectionStatus={() => {
            setDirectionStatus("card3");
          }}
          card_position="3"
        >
          <CardThree />
        </CardWrapper> */}
      </g>
    </>
  );
}
