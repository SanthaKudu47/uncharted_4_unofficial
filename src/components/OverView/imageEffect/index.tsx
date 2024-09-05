let lastScrollPosition = 0;
let scrollDirection: "up" | "down" = "up";
let isRunning = false;
let value = 0;

function getScrollDirection(currentScrollAmount = 0) {
  if (currentScrollAmount > lastScrollPosition) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }
  lastScrollPosition = currentScrollAmount;
}

function scrollPositionCal(_event: Event, distanceToTopOfContainer: number) {
  const root = document.documentElement;
  const scrollTop = root.scrollTop;
  const imageContainer = document.querySelector<HTMLDivElement>("#overlay");

  let imageContainerHeight = imageContainer?.offsetHeight;

  if (distanceToTopOfContainer == undefined || !imageContainerHeight) return;
  const margin = imageContainerHeight;
  const distanceToTopOfContainerWithMargin = distanceToTopOfContainer - margin;

  getScrollDirection(root.scrollTop);

  const passedPercentage = Math.round(
    ((scrollTop - distanceToTopOfContainerWithMargin) / imageContainerHeight) *
      100
  );

  const isBefore = scrollTop - distanceToTopOfContainerWithMargin < 0;
  const isAfter = scrollTop >= distanceToTopOfContainer;

  if (isBefore) {
    root.style.setProperty("--pr", "0");
  }

  if (0 <= passedPercentage && passedPercentage <= 100) {
   
    const newV = passedPercentage;
    if (scrollDirection === "up") {
      if (newV > value) {
        return;
      }
      value = newV;
    } else {
      if (newV < value) {
        return;
      }
      value = newV;
    }

    root.style.setProperty("--pr", value.toString());
  }

  if (isAfter) {
    root.style.setProperty("--pr", "100");
  }
}

function scrollHandler(_ev: Event, distanceToTopOfContainer: number) {
  if (isRunning === true) {
    return;
  } else {
    isRunning = true;
    scrollPositionCal(_ev, distanceToTopOfContainer);
    setTimeout(() => {
      isRunning = false;
    }, 100);
  }
}

export { scrollDirection, getScrollDirection, scrollHandler };
