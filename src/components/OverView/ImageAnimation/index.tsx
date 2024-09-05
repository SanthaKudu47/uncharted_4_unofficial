import { useEffect, useRef } from "react";
import { scrollHandler } from "../imageEffect";

import inActionSmall from "../../../assets/imgs/in_action_small.png";
import inActionShade from "../../../assets/imgs/in_action_shade.png";

import "./styles.css";

export default function ImageAnimation({
  grayImageSrc = "in_action_gray_small.png",
  colorImageSrc = inActionSmall,
  size = "sm",
}: {
  grayImageSrc: string;
  colorImageSrc: string;
  size: "sm" | "lg";
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const styles =
    size === "sm" ? "w-full  h-[calc(100vw)]" : "w-[400px] h-auto  overflow-hidden";

  const animationCss = "gray_image_overlay gray_image_overlay_appear";

  useEffect(() => {
    const imageContainer = overlayRef.current as HTMLDivElement;
    if (!imageContainer) return;

    let nearestParent = imageContainer.offsetParent as HTMLElement;
    let distanceToTopOfContainer = nearestParent.offsetTop;

    while (nearestParent) {
      nearestParent = nearestParent.offsetParent as HTMLElement;
    }

    if (distanceToTopOfContainer === 0) {
      distanceToTopOfContainer =
        imageContainer.getBoundingClientRect().top + window.scrollY;
    }

    const scrollHandlerWrapper: (this: Window, _ev: Event) => void = function (
      this,
      _ev
    ) {
      scrollHandler(_ev, distanceToTopOfContainer);
    };

    window.addEventListener("scroll", scrollHandlerWrapper);
    return () => {
      window.removeEventListener("scroll", scrollHandlerWrapper);
    };
  }, []);
  return (
    <div className={`${styles} relative`}>
      {size === "sm" ? (
        <div className="absolute w-full bottom-0 z-10">
          <img src={inActionShade} alt="in_action_shade" width={"100%"} />
        </div>
      ) : (
        <></>
      )}

      <img src={colorImageSrc} alt="in_action" width={"auto"} />
      <div
        id="overlay"
        ref={overlayRef}
        style={{
          backgroundImage: `url('${grayImageSrc}')`,
        }}
        className={`absolute top-0 bottom-0 left-0 right-0 overflow-hidden ${animationCss}`}
      />
    </div>
  );
}
