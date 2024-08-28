function updateCssVariable() {
  const root = document.documentElement;
  root.style.setProperty(`--op`, "1");
}

function attachVideo(
  introVideo: string,
  dispatch: React.Dispatch<React.SetStateAction<boolean>>,
  callback: () => void
) {
  const videoWrapper = document.getElementById("video_wrapper");
  const placeHolder = document.getElementById(
    "place_holder"
  ) as HTMLImageElement;
  if (!videoWrapper || !placeHolder) return;
  //create video
  const videoElement = document.createElement("Video") as HTMLVideoElement;

  videoElement.id = "vid_k";
  videoElement.muted = true;
  //videoElement.autoplay = true;
  videoElement.classList.add(
    "object-cover",
    "w-full",
    "h-[calc(4*(100vw/8))]",
    "sm:h-[calc(4*(100vw/8))]",
    "lg:h-lvh"
  );
  videoElement.preload = "auto";
  videoElement.playsInline = true;
  videoElement.autoplay = true;
  videoElement.defaultMuted = true;
  videoElement.poster = placeHolder.src;
  videoElement.loop = true;
  videoElement.src = introVideo;
  videoElement.oncontextmenu = function (_e) {
    _e.preventDefault();
  };

  videoWrapper.removeChild(placeHolder);
  videoWrapper.appendChild(videoElement);
  videoElement.load();
  videoElement.play();
  callback();

  const internals: HTMLCollection = videoWrapper.children;
  let buttonWrapper: HTMLDivElement | null = null;
  for (let index = 0; index < internals.length; index++) {
    const element = internals[index];
    if (element.id === "playback_button_wrapper") {
      buttonWrapper = element as HTMLDivElement;
      break;
    }
  }

  if (!buttonWrapper) return;

  const button = buttonWrapper.firstChild as HTMLDivElement;

  button.onclick = function (this: GlobalEventHandlers, _ev: MouseEvent) {
    if (videoElement.paused) {
      dispatch(true);
      videoElement.play();
    } else {
      dispatch(false);
      videoElement.pause();
    }
  };

  // poster={poster}
}

export { attachVideo, updateCssVariable };
