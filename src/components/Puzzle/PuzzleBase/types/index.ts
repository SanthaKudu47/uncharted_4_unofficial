type pZeroMatchingStatus = {
  card1: number;
  card2: number;
};

type pOneMatchingStatus = {
  card1: number;
  card2: number;
  card3: number;
};
type PuzzleWinStatus = {
  puzzleZero: boolean;
  puzzleOne: boolean;
  puzzleThree: boolean;
  puzzleTwo: boolean;

  total: number;
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
};

export type {
  pZeroMatchingStatus,
  PuzzleWinStatus,
  Puzzles,
  pOneMatchingStatus,
};
