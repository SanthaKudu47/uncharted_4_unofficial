type pZeroMatchingStatus = {
  card1: number;
  card2: number;
};

type cardThreeMatchingStatus = {
  card1: number;
  card2: number;
  card3: number;
};

type cardFourMatchingStatus = {
  card1: number;
  card2: number;
  card3: number;
  card4: number;
};
type PuzzleWinStatus = {
  puzzleZero: boolean;
  puzzleOne: boolean;
  puzzleThree: boolean;
  puzzleTwo: boolean;
};
type Puzzles = {
  puzzleZero: {
    card1: number;
    card2: number;
  };
  puzzleOne: {
    card1: number;
    card2: number;
    card3: number;
  };
  puzzleTwo: {
    card1: number;
    card2: number;
    card3: number;
  };
  puzzleThree: {
    card1: number;
    card2: number;
    card3: number;
    card4: number;
  };
};

type cardIdType = "card1" | "card2" | "card3" | "card4";

export type {
  pZeroMatchingStatus,
  PuzzleWinStatus,
  Puzzles,
  cardThreeMatchingStatus,
  cardFourMatchingStatus,
  cardIdType,
};
