import { useEffect, useRef, useState } from "react";
import introVideo from "../../assets/vids/intro.mp4";
import playBtnIcon from "../../assets/svgs/play.svg";
import pauseBtnIcon from "../../assets/svgs/pause.svg";

import "./styles.css";

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

export default function Video({ src = introVideo }: { src: string }) {
  const [isPlaying, setPlaying] = useState(true);
  const refDiv = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

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

    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play();
      setPlaying(true);
    } else {
      videoElement.pause();
      setPlaying(false);
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
      <div className="flex w-full" ref={wrapper} id={"wrapper"}>
        {/* <video
          className="object-cover w-full h-[calc(4*(100vw/8))] sm:h-[calc(4*(100vw/8))] lg:h-lvh"
          id={"vid_k"}
          ref={ref}
          poster={poster}
          muted={true}
          loop={true}
          preload="none"
          autoPlay={true}
          controls={false}
          src={"src"}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          onCanPlayThrough={playVideo}
        /> */}
      </div>
    </div>
  );
}
