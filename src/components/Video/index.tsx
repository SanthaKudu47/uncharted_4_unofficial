import { useEffect, useRef, useState } from "react";
import introVideo from "../../assets/vids/intro.mp4";

import playBtnIcon from "../../assets/svgs/play.svg";
import pauseBtnIcon from "../../assets/svgs/pause.svg";

import "./styles.css";

function updateCssVariable() {
  const root = document.documentElement;
  root.style.setProperty("--video_container_op", "1");
}

function intersectionCallbackHandler(
  videoElement: HTMLVideoElement
  //   setLoaded: React.Dispatch<React.SetStateAction<boolean>>
) {
  const intersectionCallback: IntersectionObserverCallback = function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoElement = entry.target as HTMLVideoElement;
        //   videoElement.poster = hero_bg_small;
        videoElement.src = introVideo;
        videoElement.load();

        //setLoaded(true);
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

function initializeVideo() {
  const videoElement: HTMLVideoElement | null = document.getElementById(
    "vid_k"
  ) as HTMLVideoElement;
  if (!videoElement) return;
  intersectionCallbackHandler(videoElement);
}

export default function Video() {
  const [isPlaying, setPlaying] = useState(true);
  const refDiv = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.addEventListener("load", initializeVideo);
    return () => {
      window.removeEventListener("load", initializeVideo);
    };
  }, []);

  function mediaPlay() {
    const videoElement = ref.current;
    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play();
      setPlaying(true);
    } else {
      videoElement.pause();
      setPlaying(false);
    }
  }

  function playVideo(e: React.SyntheticEvent<HTMLVideoElement, Event>) {
    const videoElement = ref.current;
    const container = refDiv.current;
    if (videoElement && container) {
      videoElement.play();
      updateCssVariable();
      container.classList.add("visible_video");
    }
  }

  return (
    <div className=" h-auto w-full relative z-0 video_container" ref={refDiv}>
      <div className="h-[40px]  rounded-md absolute left-0 right-0 top-0 flex flex-row justify-end px-5 items-center">
        <div
          className="w-[30px] h-[30px] bg-blue_dark rounded-sm absolute cursor-pointer media_play_btn flex items-center justify-center opacity-80"
          onClick={mediaPlay}
        >
          {isPlaying && <img src={playBtnIcon} alt="play_button" />}
          {!isPlaying && <img src={pauseBtnIcon} alt="pause_button" />}
        </div>
      </div>
      <video
        id="vid_k"
        ref={ref}
        muted={true}
        loop={true}
        preload="none"
        controlsList="none"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onCanPlayThrough={playVideo}
      ></video>
    </div>
  );
}
