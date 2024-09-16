import { useEffect, useState } from "react";
import p1card1 from "../../assets/imgs/p1c1.png";
import Base from "./Base";

import "./styles.css";
import { P1Card } from "./p1Card";
import { PirateSymbol, SwardSymbol } from "./cardImages";
import { InnerC1, InnerC2 } from "./p1CardInner";
import PuzzleTwo from "./PuzzleTwo";
import UnfoldCards from "./UnFoldCards";

type puzzleOneMatchingStatus = {
  card1: number;
  card2: number;
};

type puzzleTwoMatchingStatus = {
  card1: number;
  card2: number;
  card3: number;
};
type PuzzleWinStatus = {
  puzzleOne: boolean;
  puzzleTwo: boolean;
  puzzleThree: boolean;
  puzzleFour: boolean;

  total: number;
};
type Puzzles = {
  puzzleOne: {
    card1: number;
    card2: number;
  };
  puzzleTwo: {
    card1: number;
    card2: number;
    card3: number;
  };
};

const puzzleOneMatchingStatus: puzzleOneMatchingStatus = { card1: 4, card2: 2 };
const puzzleTwoMatchingStatus: puzzleTwoMatchingStatus = {
  card1: 4,
  card2: 2,
  card3: 2,
};

function isPuzzleOneMatching(
  puzzleOneMatchingStatus: puzzleOneMatchingStatus,
  currentStatus: {
    card1: number;
    card2: number;
  }
) {
  return (
    puzzleOneMatchingStatus.card1 === currentStatus.card1 &&
    puzzleOneMatchingStatus.card2 === currentStatus.card2
  );
}

function isPuzzleTwoMatching(
  puzzleTwoMatchingStatus: puzzleTwoMatchingStatus,
  currentStatus: puzzleTwoMatchingStatus
) {
  return (
    puzzleTwoMatchingStatus.card1 === currentStatus.card1 &&
    puzzleTwoMatchingStatus.card2 === currentStatus.card2 &&
    puzzleTwoMatchingStatus.card3 === currentStatus.card3
  );
}

const initialState: Puzzles = {
  puzzleOne: {
    card1: 1,
    card2: 1,
  },
  puzzleTwo: {
    card1: 1,
    card2: 1,
    card3: 1,
  },
};

let isPuzzleOneWon = false;
let isPuzzleTwoWon = false;

export default function Puzzle() {
  const [unfoldCardRotationStatus, setUnfoldCardRotationStatus] = useState(0);
  const [isZoomed, setZoomStatus] = useState(false);
  const [puzzles, setPuzzleStatus] = useState<Puzzles>(initialState);

  const [puzzleWinStatus, setPuzzleWinStatus] = useState<PuzzleWinStatus>({
    puzzleOne: false,
    puzzleFour: false,
    puzzleThree: false,
    puzzleTwo: false,
    total: 0,
  });

  const isPuzzleDone = isPuzzleOneMatching(
    puzzleOneMatchingStatus,
    puzzles.puzzleOne
  );
  const isPuzzleTwoCardsAreMatching = isPuzzleTwoMatching(
    puzzleTwoMatchingStatus,
    puzzles.puzzleTwo
  );
  const zoomHandler = function () {
    setZoomStatus(isZoomed === true ? false : true);
  };

  const puzzleOneCardHandler = function (cardId: "card1" | "card2") {
    const puzzleOne = puzzles.puzzleOne;
    const currentCardRotationStatus = puzzleOne[cardId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;
    const updatedStatus = {
      puzzleOne: { ...puzzles.puzzleOne },
      puzzleTwo: { ...puzzles.puzzleTwo },
    };
    updatedStatus.puzzleOne[cardId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  const puzzleTwoCardHandler = function (cardId: "card1" | "card2" | "card3") {
    const puzzleTwo = puzzles.puzzleTwo;
    const currentCardRotationStatus = puzzleTwo[cardId];
    const nextStep =
      currentCardRotationStatus === 4 ? 1 : currentCardRotationStatus + 1;

    const updatedStatus = {
      puzzleOne: { ...puzzles.puzzleOne },
      puzzleTwo: { ...puzzles.puzzleTwo },
    };

    updatedStatus.puzzleTwo[cardId] = nextStep;
    setPuzzleStatus(updatedStatus);
  };

  function zoomOut() {
    setZoomStatus(false);
  }

  function updatePuzzleOneWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleOne: true,
      total: 1,
    });
  }
  function updatePuzzleTwoWin() {
    setPuzzleWinStatus({
      ...puzzleWinStatus,
      puzzleOne: true,
      puzzleTwo: true,
      total: 2,
    });
  }

  const runAfterPuzzleOneMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleOneWin();
    }, 500);
  };

  const runAfterPuzzleTwoMatchFound = function () {
    setTimeout(() => {
      zoomOut();
      updatePuzzleTwoWin();
    }, 500);
  };

  const unfoldCardsAnimationEndEventHandler = function () {
    setUnfoldCardRotationStatus((last) => last + 1);
  };

  const initiatePuzzleThree = function () {
    
  };

  const puzzleTwoSteps: "left" | "middle" | "right" =
    unfoldCardRotationStatus === 0
      ? "left"
      : unfoldCardRotationStatus === 1
      ? "middle"
      : "right";

  const puzzleThreeSteps: "left" | "middle" | "right" =
    unfoldCardRotationStatus === 3
      ? "left"
      : unfoldCardRotationStatus === 4
      ? "middle"
      : "right";

  return (
    <div className="px-2 bg-blue_dark relative mx-auto flex justify-center">
      <div className="w-full h-auto overflow-hidden">
        <div
          className={`flex justify-center items-center view_port ${
            isZoomed && "zoom_in"
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
              <path
                id="blocks"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1103 2206C1712.17 2206 2206 1712.17 2206 1103C2206 493.83 1712.17 0 1103 0C493.83 0 0 493.83 0 1103C0 1712.17 493.83 2206 1103 2206ZM979.333 72L1227.33 72V320H979.333V72ZM1227.33 1887H979.331V2135H1227.33V1887ZM542.485 1664.48L743.121 1810.25L597.35 2010.88L396.714 1865.11L542.485 1664.48ZM1609.31 196.113L1809.95 341.883L1664.18 542.519L1463.54 396.749L1609.31 196.113ZM319.863 1227.68L396.499 1463.54L160.637 1540.18L84.0009 1304.32L319.863 1227.68ZM2046.03 666.816L2122.67 902.678L1886.8 979.315L1810.17 743.453L2046.03 666.816ZM396.498 743.449L319.862 979.311L84 902.674L160.636 666.812L396.498 743.449ZM2122.66 1304.32L2046.03 1540.18L1810.16 1463.54L1886.8 1227.68L2122.66 1304.32ZM743.121 396.745L542.485 542.516L396.714 341.88L597.35 196.109L743.121 396.745ZM1809.95 1865.11L1609.31 2010.88L1463.54 1810.24L1664.18 1664.47L1809.95 1865.11Z"
                fill="#3F362F"
              />
              <g id="path rail">
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
              </g>

              <g id="innerCircle">
                <path
                  className="cursor-pointer"
                  onClick={zoomHandler}
                  d="M1562.91 1249C1461.39 1394.1 1293.03 1489 1102.5 1489C911.972 1489 743.607 1394.1 642.093 1249H805.501C883.53 1321.12 987.869 1365.19 1102.5 1365.19C1217.13 1365.19 1321.47 1321.12 1399.5 1249H1562.91Z"
                  fill="#775D46"
                />
                <path
                  className="cursor-pointer"
                  onClick={zoomHandler}
                  d="M1598.46 1191C1640.29 1112.42 1664 1022.73 1664 927.5C1664 617.392 1412.61 366 1102.5 366C792.393 366 541 617.392 541 927.5C541 1022.73 564.707 1112.42 606.541 1191H752.988C697.638 1117.7 664.814 1026.43 664.814 927.5C664.814 685.773 860.772 489.815 1102.5 489.815C1344.23 489.815 1540.18 685.773 1540.18 927.5C1540.18 1026.43 1507.36 1117.7 1452.01 1191H1598.46Z"
                  fill="#775D46"
                />
              </g>
              <P1Card
                isPuzzleDone={isPuzzleDone}
                setDirectionStatus={() => {
                  puzzleOneCardHandler("card1");
                }}
                runAfterPuzzleOneMatchFound={runAfterPuzzleOneMatchFound}
                ImageCmp={<PirateSymbol />}
                InnerCmp={<InnerC1 />}
                id="p1_card_1"
              />
              <P1Card
                isPuzzleDone={isPuzzleDone}
                setDirectionStatus={() => {
                  puzzleOneCardHandler("card2");
                }}
                runAfterPuzzleOneMatchFound={runAfterPuzzleOneMatchFound}
                ImageCmp={<SwardSymbol />}
                InnerCmp={<InnerC2 />}
                id="p1_card_2"
              />
              {/* <g id="quest_1_card_2">
                <path
                  d="M1423 915L1175 915L1175 667L1423 667L1423 915Z"
                  fill="#826F5E"
                />
                <path
                  d="M1400 690L1400 892L1198 892L1198 690L1400 690Z"
                  fill="#4A4139"
                />
                <path
                  d="M1388 895L1399.26 914.5H1376.74L1388 895Z"
                  fill="#E5E2E2"
                />
                <path
                  d="M1212 895L1223.26 914.5H1200.74L1212 895Z"
                  fill="#E5E2E2"
                />
                <path
                  d="M1256 895L1267.26 914.5H1244.74L1256 895Z"
                  fill="#E5E2E2"
                />
              </g> */}

              <UnfoldCards
                number={puzzleWinStatus.total}
                runAfterAnimation={unfoldCardsAnimationEndEventHandler}
              />

              <PuzzleTwo
                step={puzzleTwoSteps}
                isPuzzleTwoCardsAreMatching={isPuzzleTwoCardsAreMatching}
                runAfterPuzzleTwoMatchFound={runAfterPuzzleTwoMatchFound}
                setDirectionStatus={puzzleTwoCardHandler}
                allDoneCaller={initiatePuzzleThree}
              />
              <g id="covers">
                <g id="left">
                  <path
                    d="M475.5 1538.5C440.147 1489.32 427.89 1449.07 405.134 1392H482.5V1060H353.912C358.313 998.053 374.978 907.888 393.5 851L55.5 757.5C17.2057 869.488 0 989.037 0 1114C0 1321.78 65.1099 1517.57 165 1683.5L475.5 1538.5Z"
                    fill="#332F2B"
                  />
                  <path
                    d="M76.6745 781.479L88.9119 793.717L84.4327 810.433L67.7161 814.913L55.4787 802.675L59.9579 785.959L76.6745 781.479Z"
                    fill="#554D45"
                  />
                  <path
                    d="M28.7475 1191.95L44.4065 1199.32L45.8541 1216.56L31.6428 1226.44L15.9838 1219.07L14.5361 1201.83L28.7475 1191.95Z"
                    fill="#554D45"
                  />
                  <path
                    d="M353.674 858.479L365.912 870.717L361.433 887.434L344.716 891.913L332.479 879.675L336.958 862.959L353.674 858.479Z"
                    fill="#554D45"
                  />
                  <path
                    d="M448.195 1073.89L463.183 1082.54V1099.85L448.195 1108.5L433.207 1099.85V1082.54L448.195 1073.89Z"
                    fill="#554D45"
                  />
                  <path
                    d="M448.195 1340L463.183 1348.65V1365.96L448.195 1374.61L433.207 1365.96V1348.65L448.195 1340Z"
                    fill="#554D45"
                  />
                  <path
                    d="M421.653 1513.32H438.959L447.612 1528.31L438.959 1543.29H421.653L412.999 1528.31L421.653 1513.32Z"
                    fill="#554D45"
                  />
                  <path
                    d="M161.705 1653.91L162.781 1636.63L178.277 1628.93L192.698 1638.5L191.622 1655.77L176.126 1663.47L161.705 1653.91Z"
                    fill="#554D45"
                  />
                  <path
                    d="M353.912 1061H481.5V1391H405.134H403.658L404.205 1392.37C408.038 1401.98 411.575 1411.13 414.977 1419.92C431.611 1462.91 445.007 1497.54 473.986 1538.1L165.393 1682.21C65.8432 1516.58 1 1321.25 1 1114C1 989.46 18.1019 870.326 56.1418 758.715L392.227 851.685C373.806 908.71 357.295 998.27 352.914 1059.93L352.838 1061H353.912ZM77.3816 780.772L76.9733 780.364L76.4157 780.514L59.6991 784.993L59.1414 785.142L58.9919 785.7L54.5127 802.416L54.3633 802.974L54.7716 803.382L67.009 815.62L67.4172 816.028L67.9749 815.879L84.6915 811.399L85.2492 811.25L85.3986 810.692L89.8778 793.976L90.0272 793.418L89.619 793.01L77.3816 780.772ZM29.1733 1191.05L28.6509 1190.8L28.1768 1191.13L13.9654 1201.01L13.4913 1201.33L13.5396 1201.91L14.9873 1219.16L15.0356 1219.73L15.558 1219.98L31.217 1227.35L31.7394 1227.59L32.2135 1227.26L46.4248 1217.39L46.8989 1217.06L46.8506 1216.48L45.403 1199.24L45.3547 1198.66L44.8323 1198.41L29.1733 1191.05ZM354.382 857.772L353.973 857.364L353.416 857.514L336.699 861.993L336.141 862.142L335.992 862.7L331.513 879.416L331.363 879.974L331.772 880.382L344.009 892.62L344.417 893.028L344.975 892.879L361.691 888.399L362.249 888.25L362.399 887.692L366.878 870.976L367.027 870.418L366.619 870.01L354.382 857.772ZM448.695 1073.02L448.195 1072.74L447.695 1073.02L432.707 1081.68L432.207 1081.97V1082.54V1099.85V1100.43L432.707 1100.72L447.695 1109.37L448.195 1109.66L448.695 1109.37L463.683 1100.72L464.183 1100.43V1099.85V1082.54V1081.97L463.683 1081.68L448.695 1073.02ZM448.695 1339.13L448.195 1338.85L447.695 1339.13L432.707 1347.79L432.207 1348.08V1348.65V1365.96V1366.54L432.707 1366.83L447.695 1375.48L448.195 1375.77L448.695 1375.48L463.683 1366.83L464.183 1366.54V1365.96V1348.65V1348.08L463.683 1347.79L448.695 1339.13ZM421.653 1512.32H421.075L420.787 1512.82L412.133 1527.81L411.845 1528.31L412.133 1528.81L420.787 1543.79L421.075 1544.29H421.653H438.959H439.536L439.825 1543.79L448.478 1528.81L448.767 1528.31L448.478 1527.81L439.825 1512.82L439.536 1512.32H438.959H421.653ZM160.707 1653.84L160.671 1654.42L161.152 1654.74L175.573 1664.31L176.054 1664.63L176.571 1664.37L192.068 1656.67L192.585 1656.41L192.621 1655.83L193.696 1638.56L193.732 1637.98L193.251 1637.66L178.83 1628.1L178.349 1627.78L177.832 1628.03L162.335 1635.74L161.818 1636L161.782 1636.57L160.707 1653.84ZM60.7744 786.775L76.3756 782.595L87.7965 794.016L83.6162 809.617L68.0149 813.797L56.594 802.376L60.7744 786.775ZM15.5809 1202.32L28.8441 1193.1L43.4583 1199.98L44.8093 1216.07L31.5462 1225.29L16.932 1218.41L15.5809 1202.32ZM337.774 863.775L353.376 859.595L364.797 871.016L360.616 886.617L345.015 890.797L333.594 879.376L337.774 863.775ZM448.195 1075.04L462.183 1083.12V1099.27L448.195 1107.35L434.207 1099.27V1083.12L448.195 1075.04ZM434.207 1349.23L448.195 1341.16L462.183 1349.23V1365.38L448.195 1373.46L434.207 1365.38V1349.23ZM414.154 1528.31L422.23 1514.32H438.382L446.457 1528.31L438.382 1542.29H422.23L414.154 1528.31ZM176.198 1662.32L162.739 1653.39L163.743 1637.27L178.205 1630.08L191.664 1639.01L190.66 1655.13L176.198 1662.32Z"
                    stroke="#85776B"
                    strokeWidth="2"
                  />
                </g>
                <g id="right">
                  <path
                    d="M1730 1538.5C1765.35 1489.32 1777.61 1449.07 1800.37 1392H1723V1060H1851.59C1847.19 998.053 1830.52 907.888 1812 851L2150 757.5C2188.29 869.488 2205.5 989.037 2205.5 1114C2205.5 1321.78 2140.39 1517.57 2040.5 1683.5L1730 1538.5Z"
                    fill="#332F2B"
                  />
                  <path
                    d="M2128.83 781.479L2116.59 793.717L2121.07 810.433L2137.78 814.913L2150.02 802.675L2145.54 785.959L2128.83 781.479Z"
                    fill="#554D45"
                  />
                  <path
                    d="M2176.75 1191.95L2161.09 1199.32L2159.65 1216.56L2173.86 1226.44L2189.52 1219.07L2190.96 1201.83L2176.75 1191.95Z"
                    fill="#554D45"
                  />
                  <path
                    d="M1851.83 858.479L1839.59 870.717L1844.07 887.434L1860.78 891.913L1873.02 879.675L1868.54 862.959L1851.83 858.479Z"
                    fill="#554D45"
                  />
                  <path
                    d="M1757.31 1073.89L1742.32 1082.54V1099.85L1757.31 1108.5L1772.29 1099.85V1082.54L1757.31 1073.89Z"
                    fill="#554D45"
                  />
                  <path
                    d="M1757.31 1340L1742.32 1348.65V1365.96L1757.31 1374.61L1772.29 1365.96V1348.65L1757.31 1340Z"
                    fill="#554D45"
                  />
                  <path
                    d="M1783.85 1513.32H1766.54L1757.89 1528.31L1766.54 1543.29H1783.85L1792.5 1528.31L1783.85 1513.32Z"
                    fill="#554D45"
                  />
                  <path
                    d="M2043.79 1653.91L2042.72 1636.63L2027.22 1628.93L2012.8 1638.5L2013.88 1655.77L2029.37 1663.47L2043.79 1653.91Z"
                    fill="#554D45"
                  />
                  <path
                    d="M1851.59 1061H1724V1391H1800.37H1801.84L1801.3 1392.37C1797.46 1401.98 1793.92 1411.13 1790.52 1419.92C1773.89 1462.91 1760.49 1497.54 1731.51 1538.1L2040.11 1682.21C2139.66 1516.58 2204.5 1321.25 2204.5 1114C2204.5 989.46 2187.4 870.326 2149.36 758.715L1813.27 851.685C1831.69 908.71 1848.21 998.27 1852.59 1059.93L1852.66 1061H1851.59ZM2128.12 780.772L2128.53 780.364L2129.08 780.514L2145.8 784.993L2146.36 785.142L2146.51 785.7L2150.99 802.416L2151.14 802.974L2150.73 803.382L2138.49 815.62L2138.08 816.028L2137.53 815.879L2120.81 811.399L2120.25 811.25L2120.1 810.692L2115.62 793.976L2115.47 793.418L2115.88 793.01L2128.12 780.772ZM2176.33 1191.05L2176.85 1190.8L2177.32 1191.13L2191.53 1201.01L2192.01 1201.33L2191.96 1201.91L2190.51 1219.16L2190.46 1219.73L2189.94 1219.98L2174.28 1227.35L2173.76 1227.59L2173.29 1227.26L2159.08 1217.39L2158.6 1217.06L2158.65 1216.48L2160.1 1199.24L2160.15 1198.66L2160.67 1198.41L2176.33 1191.05ZM1851.12 857.772L1851.53 857.364L1852.08 857.514L1868.8 861.993L1869.36 862.142L1869.51 862.7L1873.99 879.416L1874.14 879.974L1873.73 880.382L1861.49 892.62L1861.08 893.028L1860.53 892.879L1843.81 888.399L1843.25 888.25L1843.1 887.692L1838.62 870.976L1838.47 870.418L1838.88 870.01L1851.12 857.772ZM1756.81 1073.02L1757.31 1072.74L1757.81 1073.02L1772.79 1081.68L1773.29 1081.97V1082.54V1099.85V1100.43L1772.79 1100.72L1757.81 1109.37L1757.31 1109.66L1756.81 1109.37L1741.82 1100.72L1741.32 1100.43V1099.85V1082.54V1081.97L1741.82 1081.68L1756.81 1073.02ZM1756.81 1339.13L1757.31 1338.85L1757.81 1339.13L1772.79 1347.79L1773.29 1348.08V1348.65V1365.96V1366.54L1772.79 1366.83L1757.81 1375.48L1757.31 1375.77L1756.81 1375.48L1741.82 1366.83L1741.32 1366.54V1365.96V1348.65V1348.08L1741.82 1347.79L1756.81 1339.13ZM1783.85 1512.32H1784.42L1784.71 1512.82L1793.37 1527.81L1793.66 1528.31L1793.37 1528.81L1784.71 1543.79L1784.42 1544.29H1783.85H1766.54H1765.96L1765.68 1543.79L1757.02 1528.81L1756.73 1528.31L1757.02 1527.81L1765.68 1512.82L1765.96 1512.32H1766.54H1783.85ZM2044.79 1653.84L2044.83 1654.42L2044.35 1654.74L2029.93 1664.31L2029.45 1664.63L2028.93 1664.37L2013.43 1656.67L2012.92 1656.41L2012.88 1655.83L2011.8 1638.56L2011.77 1637.98L2012.25 1637.66L2026.67 1628.1L2027.15 1627.78L2027.67 1628.03L2043.16 1635.74L2043.68 1636L2043.72 1636.57L2044.79 1653.84ZM2144.73 786.775L2129.12 782.595L2117.7 794.016L2121.88 809.617L2137.49 813.797L2148.91 802.376L2144.73 786.775ZM2189.92 1202.32L2176.66 1193.1L2162.04 1199.98L2160.69 1216.07L2173.95 1225.29L2188.57 1218.41L2189.92 1202.32ZM1867.73 863.775L1852.12 859.595L1840.7 871.016L1844.88 886.617L1860.49 890.797L1871.91 879.376L1867.73 863.775ZM1757.31 1075.04L1743.32 1083.12V1099.27L1757.31 1107.35L1771.29 1099.27V1083.12L1757.31 1075.04ZM1771.29 1349.23L1757.31 1341.16L1743.32 1349.23V1365.38L1757.31 1373.46L1771.29 1365.38V1349.23ZM1791.35 1528.31L1783.27 1514.32H1767.12L1759.04 1528.31L1767.12 1542.29H1783.27L1791.35 1528.31ZM2029.3 1662.32L2042.76 1653.39L2041.76 1637.27L2027.29 1630.08L2013.84 1639.01L2014.84 1655.13L2029.3 1662.32Z"
                    stroke="#85776B"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
