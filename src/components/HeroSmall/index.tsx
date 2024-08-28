import logo_small from "../../assets/imgs/logo.png";
import title_img from "../../assets/imgs/title.png";
import introVideo from "../../assets/vids/intro.mp4";
import blendVideoFrameToBg from "../../assets/imgs/blend_video_frame_to_bg.png";
import blendVideoFrameBottom from "../../assets/imgs/video_cover_blend_down.png";
import grassBottom from "../../assets/imgs/grass_bottom.png";
import grassLeft from "../../assets/imgs/grass_side_left.png";
import grassRight from "../../assets/imgs/grass_side_right.png";
import coin from "../../assets/imgs/coin.png";
import placeHolder from "../../assets/imgs/poster_small.png";
import playBtnIcon from "../../assets/svgs/play.svg";
import pauseBtnIcon from "../../assets/svgs/pause.svg";

import "./styles.css";

import { useEffect, useState } from "react";
import { attachVideo, updateCssVariable } from "../../utils/video";

function StaticLayer() {
  return (
    <div className="w-full h-auto flex items-center justify-center absolute top-0 bottom-0">
      <div className=" w-[362px] h-[110px] mx-auto my-auto">
        <img src={title_img} alt="title_logo" />
      </div>
    </div>
  );
}

function MenuIcon({ fill = "#E2E8EA" }: { fill?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 37 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H37V6H0V0Z" fill={fill} />
      <path d="M0 10H37V16H0V10Z" fill={fill} />
      <path d="M0 20H37V26H0V20Z" fill={fill} />
    </svg>
  );
}

export default function HeroSmall() {
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
    <div className="w-full h-screen bg-blue_dark  relative z-0">
      {/* <div className="absolute left-0 top-0 bottom-0 right-0 bg-emerald-400">Mobile Nav</div> */}

      {/* navigation */}
      <nav className="flex w-full flex-row h-[65px] items-center px-5 justify-between shrink-0 sticky top-0 z-20">
        <div className="w-[150px] h-[23px]">
          <img src={logo_small} alt="logo_img_mobile" />
        </div>
        <div className="w-[37px] h-[26px] cursor-pointer">
          <MenuIcon />
        </div>
      </nav>

      {/* navigation */}

      <StaticLayer />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue_dark flex z-10 pt-[65px] video_container_wrapper visible_video_wrapper">
        <div className="flex flex-col w-full z-10 relative flex-grow">
          <div className="flex w-full relative" id="video_wrapper">
            <div
              id="playback_button_wrapper"
              className="h-[40px] sm:h-[60px] rounded-md absolute left-0 right-0 top-0 flex flex-row justify-end px-5 items-center"
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
            <img
              src={blendVideoFrameBottom}
              alt="blend"
              className="absolute bottom-0 w-full"
            />
          </div>
          <img src={blendVideoFrameToBg} alt="blend" className="relative z-0" />

          <div className=" w-full relative flex">
            <div className="w-[362px] h-[110px] sm:w-[450px] sm:h-[137px] mx-auto -mt-28">
              <img src={title_img} alt="title_logo" />
            </div>
          </div>
          <div className="relative w-full h-auto flex flex-grow overflow-hidden">
            <img
              className="absolute bottom-0"
              src={grassBottom}
              alt="grass_bottom"
              width={"100%"}
              height={110}
            />

            <div className="absolute right-0 top-0 bottom-0 w-[110px] ">
              <img
                src={grassLeft}
                alt=""
                className="max-w-full max-h-full"
              ></img>
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-[163px] ">
              <img
                src={grassRight}
                alt=""
                className="max-w-full max-h-full"
              ></img>
            </div>

            <div className="w-[276px] h-[268px] sm:w-[350px] sm:h-[340px] mx-auto">
              <img src={coin} className="max-w-full max-h-full mt-8" />
            </div>
          </div>

          <div className="absolute  bottom-0 left-0 right-0  h-auto z-10 px-4 ">
            <h5 className="text-center text-[20px] font-bold text-white_v1">
              THE END AWAITS....
            </h5>
            <div className="mx-auto my-4">
              <h2 className="font-base text-[40px] font-bold text-blue_light mx-auto text-center">
                AUGUST 20,2024
              </h2>
            </div>
            <div className="bg-white_v1 h-[60px] max-w-[330px] mx-auto my-auto flex justify-center items-center mb-28 sm:mb-16 cursor-pointer">
              <h4 className="font-base font-bold text-blue_dark text-center text-[24px] ">
                BUY NOW
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* video_container_wrapper visible_video_wrapper */}
      {/* <div className="">
        <div className="absolute top-0 bottom-0  left-0 right-0  bg-blue_dark flex z-10 pt-[65px]  ">
          <div className="flex flex-col w-full z-10 relative  flex-grow ">
            <div className="relative">
              <Video src={introVide} />
              <img
                src={blendVideoFrameBottom}
                alt="blend"
                className="absolute bottom-0 w-full"
              />
            </div>

            <img
              src={blendVideoFrameToBg}
              alt="blend"
              className="relative z-0"
            />

           

           
          </div>
        </div>

      </div> */}

      {/*  */}
    </div>
  );
}
