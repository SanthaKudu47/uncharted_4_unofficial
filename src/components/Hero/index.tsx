import { useEffect, useState } from "react";
import HeroLarge from "../HeroLarge";
import HeroSmall from "../HeroSmall";

let screenSize: "small" | "large" = "large";

export default function Hero() {
  const [isLargeScreen, setScreen] = useState<boolean>(
    window.screen.width >= 1024
  );
  useEffect(() => {
    const screen = window.screen.width < 1024;
    if (screen) screenSize = "small";

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  function resizeHandler() {
    const screen = window.screen.width < 1024;

    if (screen && screenSize === "small") return;
    if (!screen && screenSize === "large") return;

    if (screen) {
      screenSize = "small";
      setScreen(false);
    } else {
      screenSize = "large";
      setScreen(true);
    }
  }
  return <>{isLargeScreen ? <HeroLarge /> : <HeroSmall />}</>;
}
