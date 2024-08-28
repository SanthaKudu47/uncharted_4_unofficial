import introVideo from "../../assets/vids/intro.mp4";

import downShade from "../../assets/imgs/shade_down.png";
import titleLarge from "../../assets/imgs/title_large.png";
import { useEffect, useState } from "react";
import placeHolder from "../../assets/imgs/poster_small.png";
import playBtnIcon from "../../assets/svgs/play.svg";
import pauseBtnIcon from "../../assets/svgs/pause.svg";
import { attachVideo, updateCssVariable } from "../../utils/video";

import "./styles.css";

function Title() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center">
      <div className="flex flex-col max-w-screen-2xl px-6 items-end justify-center w-full">
        <div className="flex flex-col">
          <div className="w-[584px] h-[215px]">
            <img src={titleLarge} alt="title_large" />
          </div>
          <div className="font-base font-bold">
            <h5 className="text-center text-[30px] text-white">
              THE END AWAITS....
            </h5>
            <h2 className="text-center text-[50px] text-blue_light">
              AUGUST 20,2024
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageBasedHero() {
  return (
    <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto h-full">
      <Title />
    </div>
  );
}

export default function HeroLarge() {
  const [isPlaying, setPlaying] = useState(true);
  useEffect(() => {
    const executor = function () {
      attachVideo(introVideo, setPlaying, updateCssVariable);
    };
    window.addEventListener("load", executor);
    return () => {
      window.addEventListener("load", executor);
    };
  }, []);
  return (
    <>
      <div className="relative w-full h-screen bg-blue_dark z-0">
        <ImageBasedHero />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue_dark">
        <div className="flex w-full relative" id="video_wrapper">
          <div
            id="playback_button_wrapper"
            className="z-20 h-[40px] sm:h-[60px] rounded-md absolute left-0 right-0 top-0 flex flex-row justify-end px-5 items-center"
          >
            <div
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-blue_dark rounded-sm absolute cursor-pointer media_play_btn flex items-center justify-center opacity-80"
              id="playback_button"
            >
              {isPlaying && <img src={playBtnIcon} alt="play_button" />}
              {!isPlaying && <img src={pauseBtnIcon} alt="pause_button" />}
            </div>
          </div>
          <img
            src={placeHolder}
            alt="poster_img_small"
            width={"100%"}
            id="place_holder"
          />
          {/* <img
              src={blendVideoFrameBottom}
              alt="blend"
              className="absolute bottom-0 w-full"
            /> */}
        </div>
        <div className="absolute bottom-[60px] left-0 right-0 z-10">
          <img
            src={downShade}
            alt="down_shade"
            height={"100%"}
            width={"100%"}
            className="h-[300px]"
          />
        </div>
        <div className="video_container_wrapper_large visible_video_wrapper_large">
          <Title />
        </div>
        {/* <Title /> */}
      </div>

      <div className="w-full h-[65px] bg-blue_dark z-20 sticky top-0 -mt-[65px]">
        <nav className="flex items-center h-full font-base text-white_v1 text-[20px] mx-5">
          <ul className="flex gap-x-4">
            <li className="float-left text-center bg-blue_light_v2 p-2 cursor-pointer ">
              HOME
            </li>
            <li className="float-left text-center bg-blue_light_v2 p-2 cursor-pointer">
              OVERVIEW
            </li>
            <li className="float-left text-center bg-blue_light_v2 p-2 cursor-pointer">
              CHARACTERS
            </li>
            <li className="float-left text-center bg-blue_light_v2 p-2 cursor-pointer">
              GALLERY
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
