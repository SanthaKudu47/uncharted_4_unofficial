function shouldCardMovePositiveSide(positionId: number, totalCards = 2) {
  let limit = 0;
  if (totalCards == 2) {
    limit = 1;
  } else {
    if (totalCards % 2 === 1) {
      limit = (totalCards - 1) / 2;
    }
  }

  if (positionId <= limit) {
    return true;
  } else {
    return false;
  }
}

function rightSideCardsTransform(deg = 0) {
  let axis = "X";
  let direction = "";
  if (deg === 0) {
    axis = "X";
    direction = "";
  }
  if (deg === 90) {
    axis = "Y";
    direction = "-";
  }

  if (deg === 180) {
    axis = "X";
    direction = "-";
  }

  if (deg === 270) {
    axis = "Y";
    direction = "";
  }
  if (deg === 360) {
    axis = "Y";
    direction = "";
  }

  return { axis, direction };
}

function leftSideCardsTransform(deg = 0) {
  let axis = "X";
  let direction = "";
  if (deg === 0) {
    axis = "X";
    direction = "";
  }
  if (deg === 90) {
    axis = "Y";
    direction = "";
  }

  if (deg === 180) {
    axis = "X";
    direction = "";
  }

  if (deg === 270) {
    axis = "Y";
    direction = "";
  }
  if (deg === 360) {
    axis = "Y";
    direction = "-";
  }
  return { axis, direction };
}

function getCardRotationAndDirection(
  card: HTMLElement,
  positionId: string,
  totalCards = 2
) {
  const transform = card.style.transform;
  const stringPart = transform.split(" ")[0].trim();
  const rotation = Number(stringPart.slice(7, stringPart.length - 4)); //rotate(270deg) translateY(100px)
  let deg = rotation;
  let axis = "X";

  let direction = "";

  const shouldMoveRight = shouldCardMovePositiveSide(
    Number(positionId),
    totalCards
  );

  if (shouldMoveRight) {
    const data = rightSideCardsTransform(deg);
    axis = data.axis;
    direction = data.direction;
  } else {
    const data = leftSideCardsTransform(deg);
    axis = data.axis;
    direction = data.direction;
  }

  console.log("this....", deg, axis, direction);

  return { rotation: rotation, axis: axis, direction: direction };
}

function twoCardAnimation(className = "card") {
  const cards = document.getElementsByClassName(className);
  if (cards.length === 2) {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const crd = element as HTMLElement;
      const crdPositionId = crd.dataset["card_position"];

      const { axis, rotation } = getCardRotationAndDirection(
        crd,
        crdPositionId === undefined ? "1" : crdPositionId,
        cards.length
      );
      crd.style.transform = `rotate(${rotation}deg) translate${axis}(71px)`;
    }
  }
}

function threeCardAnimation(className = "card") {
  const cards = document.getElementsByClassName(className);

  if (cards.length === 3) {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const crd = element as HTMLElement;
      const crdPositionId = crd.dataset["card_position"];
      crdPositionId === undefined ? "1" : crdPositionId;
      //ignore 2 nd card
      if (crdPositionId === "2") continue;
      const { axis, rotation, direction } = getCardRotationAndDirection(
        crd,
        crdPositionId === undefined ? "1" : crdPositionId,
        cards.length
      );
      crd.style.transform = `rotate(${rotation}deg) translate${axis}(${direction}75px)`;
    }
  }
  if (cards.length === 4) {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      const crd = element as HTMLElement;
      const crdPositionId = crd.dataset["card_position"];
      crdPositionId === undefined ? "1" : crdPositionId;

      const { axis, rotation, direction } = getCardRotationAndDirection(
        crd,
        crdPositionId === undefined ? "1" : crdPositionId,
        cards.length
      );
      const pID = crdPositionId === undefined ? "1" : crdPositionId;
      let amount = pID === '1' || pID === '4' ? "60" : "25";
      crd.style.transform = `rotate(${rotation}deg) translate${axis}(${direction}${amount}px)`;
    }
  }
}

function puzzleCardsAnimation(className: string, variant: number) {
  if (variant === 1) twoCardAnimation(className);
  if (variant === 2) threeCardAnimation(className);
}

export { puzzleCardsAnimation };
