import React, { RefObject, useEffect, useState } from "react";

type Options = {
  threshold: "init" | "1/2" | "3/4" | "full";
  once?: boolean;
  rootElement?: Element | Document | null | undefined;
  rootMargin?: string;
};

function IntObserverWrapper(
  setInView: React.Dispatch<React.SetStateAction<boolean>>,
  target: Element,
  options: Options = {
    threshold: "init",
    once: false,
    rootElement: undefined,
    rootMargin: "0px",
  }
) {
  const value = options.threshold;
  let t = 0;
  switch (value) {
    case "init":
      t = 0;
      break;
    case "1/2":
      t = 0.5;
      break;
    case "3/4":
      t = 0.75;
      break;
    case "full":
      t = 1;
      break;
    default:
      t = 0;
      break;
  }

  const interceptionHandler: IntersectionObserverCallback =
    function interceptionHandler(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setInView(true);
          if (options.once === true) {
            observer.unobserve(entry.target); //
          }
        } else {
          setInView(false);
        }
      });
    };

  const observer = new IntersectionObserver(interceptionHandler, {
    threshold: t,
    root: options.rootElement,
    rootMargin: options.rootMargin,
  });

  observer.observe(target);

  return () => {
    observer.disconnect(); //clear function
  };
}

export default function useInView(
  targetRef: RefObject<Element>,
  options?: Options
) {
  const [isInView, setInView] = useState<boolean>(false);

  useEffect(() => {
    if (!targetRef.current) return;
    console.log("Running Effect On Hook....");
    const clearObserver = IntObserverWrapper(setInView, targetRef.current, {
      threshold: options?.threshold ? options.threshold : "1/2",
      once: options?.once,
      rootMargin: options?.rootMargin,
    });

    return () => {
      clearObserver();
    };

    //
  }, [targetRef]);

  return isInView;
}
