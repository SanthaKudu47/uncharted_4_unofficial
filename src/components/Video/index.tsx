import { useEffect, useRef, useState } from "react";
import introVideo from "../../assets/vids/intro.mp4";
import playBtnIcon from "../../assets/svgs/play.svg";
import pauseBtnIcon from "../../assets/svgs/pause.svg";

import poster from "../../assets/imgs/poster_large.png";

import "./styles.css";

function updateCssVariable() {
  const root = document.documentElement;
  root.style.setProperty(`--op`, "1");
}

function intersectionCallbackHandler(
  videoElement: HTMLVideoElement,
  src: string
  //   setLoaded: React.Dispatch<React.SetStateAction<boolean>>
) {
  const intersectionCallback: IntersectionObserverCallback = function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoElement = entry.target as HTMLVideoElement;
        videoElement.src = src;
        videoElement.load();
        observer.unobserve(entry.target);
        observer.disconnect();
      }
    });
  };

  let observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0,
  });
  observer.observe(videoElement);
  return observer;
}

function initializeVideo(src: string) {
  const videoElement: HTMLVideoElement | null = document.getElementById(
    "vid_k"
  ) as HTMLVideoElement;
  if (!videoElement) return;
  intersectionCallbackHandler(videoElement, src);
}

export default function Video({ src = introVideo}: { src: string; }) {
  const [isPlaying, setPlaying] = useState(true);
  const refDiv = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const executor = function () {
      initializeVideo(src);
    };
    window.addEventListener("load", executor);
    // const rootElement = document.documentElement;
    // rootElement.style.setProperty(`--op`, "0");

    return () => {
      window.removeEventListener("load", executor);
      // rootElement.style.removeProperty(`--op`);
    };
  }, []);

  function mediaPlay() {
    const videoElement = ref.current;
    console.log("456", videoElement);
    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play();
      setPlaying(true);
    } else {
      videoElement.pause();
      setPlaying(false);
    }
  }

  function playVideo(_e: React.SyntheticEvent<HTMLVideoElement, Event>) {
    const videoElement = ref.current;
    const container = refDiv.current;

    if (videoElement && container) {
      videoElement.play();
      updateCssVariable();
      container.classList.add("visible_video_wrapper");
    }
  }

  return (
    <div className="video_container flex-col  w-full relative" ref={refDiv}>
      <div className="h-[40px] sm:h-[60px] rounded-md absolute left-0 right-0 top-0 flex flex-row justify-end px-5 items-center">
        <div
          className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-blue_dark rounded-sm absolute cursor-pointer media_play_btn flex items-center justify-center opacity-80"
          onClick={mediaPlay}
        >
          {isPlaying && <img src={playBtnIcon} alt="play_button" />}
          {!isPlaying && <img src={pauseBtnIcon} alt="pause_button" />}
        </div>
      </div>
      <div className="flex w-full">
        <video
          className="object-cover w-full h-[calc(4*(100vw/8))] sm:h-[calc(4*(100vw/8))] lg:h-lvh"
          id={"vid_k"}
          ref={ref}
          poster={poster}
          muted={true}
          loop={true}
          preload="none"
          controlsList="none"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          onCanPlayThrough={playVideo}
        />
      </div>
    </div>
  );
}
