function getCardRotationAndDirection(card: HTMLElement) {
  const transform = card.style.transform;
  const stringPart = transform.split(" ")[0].trim();
  const rotation = Number(stringPart.slice(7, stringPart.length - 4)); //rotate(270deg) translateY(100px)

  let deg = 0;
  let axis = "X";

  if (rotation > 360) {
    deg = rotation % 360;
  } else {
    deg = rotation;
  }

  if (deg === 0) {
    axis = "X";
  }
  if (deg === 90) {
    axis = "Y";
  }

  if (deg === 180) {
    axis = "X";
  }

  if (deg === 270) {
    axis = "Y";
  }
  if (deg === 360) {
    axis = "X";
  }

  return { rotation: rotation, axis: axis };
}

function puzzleOneCardAnimation(className = "card") {
  const cards = document.getElementsByClassName(className);
  if (cards.length === 2) {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const crd = element as HTMLElement;
      const { axis, rotation } = getCardRotationAndDirection(crd);
      crd.style.transform = `rotate(${rotation}deg) translate${axis}(71px)`;
    }
  }
}

function puzzleTwoCardAnimation(className = "card") {
  const cards = document.getElementsByClassName(className);
  if (cards.length === 3) {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const crd = element as HTMLElement;
      const crdPositionId = crd.dataset["card_position"];
      //ignore 2 nd card
      if (crdPositionId === "2") continue;
      const { axis, rotation } = getCardRotationAndDirection(crd);
      crd.style.transform = `rotate(${rotation}deg) translate${axis}(75px)`;
    }
  }
}

export { puzzleOneCardAnimation, puzzleTwoCardAnimation };
