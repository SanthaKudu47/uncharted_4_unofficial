type variableSet = {
  isPuzzleCardRotating: boolean;
  isLastAnimationDone: boolean;
  isPuzzleCompleted: boolean;
  isPuzzleCardsAreMatchingGlobal: boolean;
  puzzleTimerRef: number | undefined;
};

type dataSetType = {
  [index: string]: variableSet;
};

const globals: dataSetType = {
    "1": {
      isPuzzleCardRotating: false,
      isLastAnimationDone: false,
      isPuzzleCompleted: false,
      isPuzzleCardsAreMatchingGlobal: false,
      puzzleTimerRef: undefined,
    },
    "2": {
      isPuzzleCardRotating: false,
      isLastAnimationDone: false,
      isPuzzleCompleted: false,
      isPuzzleCardsAreMatchingGlobal: false,
      puzzleTimerRef: undefined,
    },
    "3": {
      isPuzzleCardRotating: false,
      isLastAnimationDone: false,
      isPuzzleCompleted: false,
      isPuzzleCardsAreMatchingGlobal: false,
      puzzleTimerRef: undefined,
    },
  };

function getTimerRefs() {
  const puzzleTimerRef: { [index: string]: number | undefined } = {
    "1": undefined,
    "2": undefined,
    "3": undefined,
  };

  return puzzleTimerRef;
}

export { globals, getTimerRefs };
