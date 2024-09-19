import { useState } from "react";
import "./styles.css";
import { P1Card } from "./p1Card";
import { PirateSymbol, SwardSymbol } from "./cardImages";
import { InnerC1, InnerC2 } from "./p1CardInner";
import UnfoldCards from "./UnFoldCards";
import Quiz from "./PuzzleBase/quiz";
import {
  pZeroMatchingStatus,
  Puzzles,
  PuzzleWinStatus,
  cardThreeMatchingStatus,
  cardFourMatchingStatus,
  cardIdType,
} from "./PuzzleBase/types";
import CardOne from "./PuzzleBase/Card1";
import CardTwo from "./PuzzleBase/Card2";
import CardThree from "./PuzzleBase/Card3";
import CardFour from "./PuzzleBase/Card4";
import CardFive from "./PuzzleBase/Card5";
import CardSix from "./PuzzleBase/Card6";
import CardSeven from "./PuzzleBase/Card7";
import CardEight from "./PuzzleBase/Card8";
import CardNine from "./PuzzleBase/Card9";
import CardTen from "./PuzzleBase/Card10";
import InnerCircle from "./parts/InnerCircle";
import Machine from "./parts/Machine";

const puzzleZeroMatchingStatus: pZeroMatchingStatus = { card1: 4, card2: 2 }; //this is for base 2 card quiz
const puzzleOneMatchingStatus: cardThreeMatchingStatus = {
  card1: 4,
  card2: 2,
  card3: 2,
};
const puzzleTwoMatchingStatus: cardThreeMatchingStatus = {
  card1: 2,
  card2: 4,
  card3: 3,
};

const puzzleThreeMatchingStatus: cardFourMatchingStatus = {
  card1: 1,
  card2: 4,
  card3: 3,
  card4: 2,
};

function isPuzzleZeroMatching(
  puzzleZeroMatchingStatus: pZeroMatchingStatus,
  currentStatus: {
    card1: number;
    card2: number;
  }
) {
  return (
    puzzleZeroMatchingStatus.card1 === currentStatus.card1 &&
    puzzleZeroMatchingStatus.card2 === currentStatus.card2
  );
}

function isThreeCardPuzzleMatching(
  puzzleMatchingStatus: cardThreeMatchingStatus,
  currentStatus: cardThreeMatchingStatus
) {
  return (
    puzzleMatchingStatus.card1 === currentStatus.card1 &&
    puzzleMatchingStatus.card2 === currentStatus.card2 &&
    puzzleMatchingStatus.card3 === currentStatus.card3
  );
}

function isFourCardPuzzleMatching(
  puzzleMatchingStatus: cardFourMatchingStatus,
  currentStatus: cardFourMatchingStatus
) {
  return (
    puzzleMatchingStatus.card1 === currentStatus.card1 &&
    puzzleMatchingStatus.card2 === currentStatus.card2 &&
    puzzleMatchingStatus.card3 === currentStatus.card3 &&
    puzzleMatchingStatus.card4 === currentStatus.card4
  );
}

const initialState: Puzzles = {
  puzzleZero: {
    card1: 1,
    card2: 1,
  },
  puzzleOne: {
    card1: 1,
    card2: 1,
    card3: 1,
  },
  puzzleTwo: {
    card1: 1,
    card2: 1,
    card3: 1,
  },
  puzzleThree: {
    card1: 1,
    card2: 1,
    card3: 1,
    card4: 1,
  },
};

function getPuzzleOneSteps(unfoldCardRotationStatus: number) {
  switch (unfoldCardRotationStatus) {
    case 0:
      return "left";
    case 1:
      return "middle";
    case 2:
      return "right";
  }
  return "right";
}
function getPuzzleTwoSteps(unfoldCardRotationStatus: number) {
  switch (unfoldCardRotationStatus) {
    case 0:
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "right";
}

function getPuzzleThreeSteps(unfoldCardRotationStatus: number) {
  switch (unfoldCardRotationStatus) {
    case 0:
    case 1:
    case 2:
      return "left";
    case 3:
      return "middle";
    case 4:
      return "right";
  }
  return "right";
}

export default function Puzzle() {
  const [unfoldCardRotationStatus, setUnfoldCardRotationStatus] = useState(0);
  const [isZoomed, setZoomStatus] = useState(false);
  const [puzzles, setPuzzleStatus] = useState<Puzzles>(initialState);

  const [puzzleWinStatus, setPuzzleWinStatus] = useState<PuzzleWinStatus>({
    puzzleZero: false,
    puzzleOne: false,
    puzzleThree: false,
    puzzleTwo: false,
  });

  const isPuzzleDone = isPuzzleZeroMatching(
    puzzleZeroMatchingStatus,
    puzzles.puzzleZero
  );
  const isPuzzleOneCardsAreMatching = isThreeCardPuzzleMatching(
    puzzleOneMatchingStatus,
    puzzles.puzzleOne
  );

  const isPuzzleTwoCardsAreMatching = isThreeCardPuzzleMatching(
    puzzleTwoMatchingStatus,
    puzzles.puzzleTwo
  );

  const isPuzzleThreeCardsAreMatching = isFourCardPuzzleMatching(
    puzzleThreeMatchingStatus,
    puzzles.puzzleThree
  );
  const zoomHandler = function () {
    setZoomStatus(isZoomed === true ? false : true);
  };

  const getUpdatedState = function (puzzles: Puzzles) {
    const updatedStatus = {
      puzzleZero: { ...puzzles.puzzleZero },
      puzzleOne: { ...puzzles.puzzleOne },
      puzzleTwo: { ...puzzles.puzzleTwo },
      puzzleThree: { ...puzzles.puzzleThree },
    };

    return updatedStatus;
  };

  const puzzleZeroCardHandler = function (cardId: "card1" | "card2") {
    const puzzleZero = puzzles.puzzleZero;
    const currentCardRotationStatus = puzzleZero[cardId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;
    const updatedStatus = getUpdatedState(puzzles);
    updatedStatus.puzzleZero[cardId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  const puzzleOneCardHandler = function (cardId: cardIdType) {
    const crdId = cardId as "card1" | "card2" | "card3";
    const puzzleOne = puzzles.puzzleOne;
    const currentCardRotationStatus = puzzleOne[crdId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;
    const updatedStatus = getUpdatedState(puzzles);
    updatedStatus.puzzleOne[crdId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  const puzzleTwoCardHandler = function (cardId: cardIdType) {
    const crdId = cardId as "card1" | "card2" | "card3";
    const puzzleTwo = puzzles.puzzleTwo;
    const currentCardRotationStatus = puzzleTwo[crdId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;
    const updatedStatus = getUpdatedState(puzzles);
    updatedStatus.puzzleTwo[crdId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  const puzzleThreeCardHandler = function (cardId: cardIdType) {
    const puzzleThree = puzzles.puzzleThree;
    const currentCardRotationStatus = puzzleThree[cardId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;
    const updatedStatus = getUpdatedState(puzzles);
    updatedStatus.puzzleThree[cardId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  function zoomOut() {
    setZoomStatus(false);
  }

  function updatePuzzleZeroWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleZero: true,
    });
  }
  function updatePuzzleOneWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleZero: true,
      puzzleOne: true,
    });
  }

  function updatePuzzleTwoWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleZero: true,
      puzzleOne: true,
      puzzleTwo: true,
    });
  }

  function updatePuzzleThreeWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleZero: true,
      puzzleOne: true,
      puzzleTwo: true,
      puzzleThree: true,
    });
  }

  const runAfterPuzzleZeroMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleZeroWin();
      setUnfoldCardRotationStatus(1);
    }, 500);
  };

  const runAfterPuzzleOneMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleOneWin();
      setUnfoldCardRotationStatus(2);
    }, 500);
  };

  const runAfterPuzzleTwoMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleTwoWin();
      setUnfoldCardRotationStatus(3);
    }, 500);
  };

  const runAfterPuzzleThreeMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleThreeWin();
      setUnfoldCardRotationStatus(4);
    }, 500);
  };

  const unfoldCardsAnimationEndEventHandler = function () {
    // setUnfoldCardRotationStatus((last) => last + 1);
  };

  const puzzleOneSteps = getPuzzleOneSteps(unfoldCardRotationStatus);
  const puzzleTwoSteps = getPuzzleTwoSteps(unfoldCardRotationStatus);
  const puzzleThreeSteps = getPuzzleThreeSteps(unfoldCardRotationStatus);

  const isNormalZoom =
    puzzleWinStatus.puzzleZero &&
    puzzleWinStatus.puzzleOne &&
    puzzleWinStatus.puzzleTwo
      ? true
      : false;

  return (
    <div className="px-2 bg-blue_dark relative mx-auto flex justify-center">
      <div className="w-full h-auto overflow-hidden">
        <div
          className={`flex justify-center items-center view_port ${
            isZoomed ? (isNormalZoom === true ? "zoom_in_half" : "zoom_in") : ""
          }`}
        >
          <svg
            width="100%"
            height="100%  "
            viewBox="0 0 2206 2206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="puzzle">
              <Machine animate={unfoldCardRotationStatus} />
              <path
                id="base"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2206 1103C2206 1712.17 1712.17 2206 1103 2206C493.83 2206 0 1712.17 0 1103C0 493.83 493.83 0 1103 0C1712.17 0 2206 493.83 2206 1103ZM1227.33 72L979.333 72V320H1227.33V72ZM979.331 1887H1227.33V2135H979.331V1887ZM743.121 1810.25L542.485 1664.48L396.714 1865.11L597.35 2010.88L743.121 1810.25ZM1809.95 341.883L1609.31 196.113L1463.54 396.749L1664.18 542.519L1809.95 341.883ZM2122.67 902.678L2046.03 666.816L1810.17 743.453L1886.8 979.315L2122.67 902.678ZM319.862 979.311L396.498 743.449L160.636 666.812L84 902.674L319.862 979.311ZM542.485 542.516L743.121 396.745L597.35 196.109L396.714 341.88L542.485 542.516ZM1609.31 2010.88L1809.95 1865.11L1664.18 1664.47L1463.54 1810.24L1609.31 2010.88ZM1112 1469C1411.89 1469 1655 1225.89 1655 926C1655 626.109 1411.89 383 1112 383C812.109 383 569 626.109 569 926C569 1225.89 812.109 1469 1112 1469ZM316 1089V1337H68V1089H316ZM2152 1337V1089H1904V1337H2152Z"
                fill="#3F362F"
              />

              <path
                id="rail"
                d="M673 792H1547"
                stroke="#C4BAB2"
                stroke-width="20"
              />
              {/* <g id="path rail">
                <g id="Vector">
                  <path
                    d="M1104 1217.5H1675M1103.9 1217.5H532.897M1102.75 1217H531.672C501.168 1217.13 401.745 1226.27 360.149 1407.34C302.927 1656.42 592.75 1995 1102.75 2017M1104 1217H1675.08C1705.58 1217.13 1805.01 1226.27 1846.6 1407.34C1903.82 1656.42 1614 1995 1104 2017M2021 1105C2021 1612 1610 2023 1103 2023C596.003 2023 185 1612 185 1105C185 598.003 596.003 187 1103 187C1610 187 2021 598.003 2021 1105Z"
                    stroke="#C4BAB2"
                    strokeWidth="20"
                  />
                </g>
                <rect
                  id="Rectangle 35"
                  x="659.5"
                  y="784.5"
                  width="887"
                  height="13"
                  fill="#C4BAB2"
                  stroke="#C4BAB2"
                />
              </g> */}

              <InnerCircle onClick={zoomHandler} />
              <path
                id="rail_2"
                d="M204 1220.5H2018.5M2028 1105C2028 1612 1617 2023 1110 2023C603.003 2023 192 1612 192 1105C192 598.003 603.003 187 1110 187C1617 187 2028 598.003 2028 1105Z"
                stroke="#C4BAB2"
                stroke-width="20"
              />

              <P1Card
                isPuzzleDone={isPuzzleDone}
                setDirectionStatus={() => {
                  puzzleZeroCardHandler("card1");
                }}
                runAfterPuzzleOneMatchFound={runAfterPuzzleZeroMatchFound}
                ImageCmp={<PirateSymbol />}
                InnerCmp={<InnerC1 />}
                id="p1_card_1"
              />
              <P1Card
                isPuzzleDone={isPuzzleDone}
                setDirectionStatus={() => {
                  puzzleZeroCardHandler("card2");
                }}
                runAfterPuzzleOneMatchFound={runAfterPuzzleZeroMatchFound}
                ImageCmp={<SwardSymbol />}
                InnerCmp={<InnerC2 />}
                id="p1_card_2"
              />

              <UnfoldCards
                number={unfoldCardRotationStatus}
                runWhenAnimationStarts={unfoldCardsAnimationEndEventHandler}
              />

              <path
                id="cover_middle"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1103C0 1098.33 0.029068 1093.66 0.0870285 1089H344.127C344.042 1093.66 344 1098.32 344 1103C344 1311.81 428.323 1500.93 564.776 1638.16L359.201 1917.49C138.466 1715.79 0 1425.57 0 1103ZM1842.37 1921.52C2065.68 1719.67 2206 1427.72 2206 1103C2206 1098.33 2205.97 1093.66 2205.91 1089H1861.87C1861.96 1093.66 1862 1098.32 1862 1103C1862 1312.73 1776.93 1502.6 1639.41 1639.97L1842.37 1921.52Z"
                fill="#3F362F"
              />

              <g id="windows">
                <rect
                  id="window_1"
                  x="68"
                  y="1089"
                  width="338"
                  height="248"
                  fill="#1E1E1E"
                />
                <rect
                  id="window_2"
                  x="1792"
                  y="1089"
                  width="338"
                  height="248"
                  fill="#1E1E1E"
                />
              </g>

              <Quiz
                step={puzzleOneSteps}
                isPuzzleCardsAreMatching={isPuzzleOneCardsAreMatching}
                runAfterPuzzleMatchFound={runAfterPuzzleOneMatchFound}
                setDirectionStatus={puzzleOneCardHandler}
                cards={[<CardOne />, <CardTwo />, <CardThree />]}
                puzzleId="1"
              />

              <Quiz
                step={puzzleTwoSteps}
                isPuzzleCardsAreMatching={isPuzzleTwoCardsAreMatching}
                runAfterPuzzleMatchFound={runAfterPuzzleTwoMatchFound}
                setDirectionStatus={puzzleTwoCardHandler}
                cards={[<CardFour />, <CardFive />, <CardSix />]}
                puzzleId="2"
              />
              <Quiz
                step={puzzleThreeSteps}
                isPuzzleCardsAreMatching={isPuzzleThreeCardsAreMatching}
                runAfterPuzzleMatchFound={runAfterPuzzleThreeMatchFound}
                setDirectionStatus={puzzleThreeCardHandler}
                cards={[
                  <CardSeven />,
                  <CardEight />,
                  <CardNine />,
                  <CardTen />,
                ]}
                puzzleId="3"
              />

              <g id="cover_top">
                <path
                  d="M0 1103C0 1098.33 0.029068 1093.66 0.0870285 1089H68V1337H380.756C400.04 1396.56 426.487 1452.9 459.081 1505H75.5481C26.7755 1380.44 0 1244.85 0 1103Z"
                  fill="#3F362F"
                />
                <path
                  d="M1746.92 1505H2130.45C2179.22 1380.44 2206 1244.85 2206 1103C2206 1098.33 2205.97 1093.66 2205.91 1089H2130V1337H1825.24C1805.96 1396.56 1779.51 1452.9 1746.92 1505Z"
                  fill="#3F362F"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
