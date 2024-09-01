import { useEffect, useState } from "react";
import OverViewLarge from "./OverViewLarge";
import OverViewSmall from "./OverViewSmall";

let lastScreen = getCurrentWindowSize();

function getCurrentWindowSize() {
  const width = window.screen.width;
  return width >= 0 && width < 768 ? "sm" : "lg";
}

export default function OverView() {
  const [screen, setScreen] = useState<"sm" | "lg">(getCurrentWindowSize());
  const resizeHandler = () => {
    if (lastScreen !== getCurrentWindowSize()) {
      console.log("switch");
      setScreen(getCurrentWindowSize());
      lastScreen = getCurrentWindowSize();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function switchComponent() {
    return screen === "sm" ? <OverViewSmall /> : <OverViewLarge />;
  }
  return <div>{switchComponent()}</div>;
}
