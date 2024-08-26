import title from "../../assets/imgs/title_large.png";
import Video from "../Video";
import introVideo from "../../assets/vids/intro.mp4";

import topShade from "../../assets/imgs/shade_top.png";
import downShade from "../../assets/imgs/shade_down.png";
import titleLarge from "../../assets/imgs/title_large.png";

function ImageBasedHero() {
  return (
    <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto h-full">
      <div className="flex flex-row justify-end items-center h-full">
        <div className="">
          <div className="w-[584px] h-[215px]">
            <img src={title} alt="title_large" width={"100%"} height={"100%"} />
          </div>
          <div className="font-base font-bold text-center">
            <h5 className="text-[30px]  text-white_v1">THE END AWAITS....</h5>
            <h3 className="text-[60px] text-blue_light">AUGUST 20,2024</h3>
          </div>
          <div className="cursor-pointer bg-white_v1 w-[337px] h-[66px] px-1 text-blue_dark text-[24px] font-base font-bold text-center flex items-center justify-center mx-auto">
            BUY NOW
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroLarge() {
  return (
    <>
      <div className="relative w-full h-screen bg-blue_dark z-0">
        <ImageBasedHero />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue_dark video_container_wrapper visible_video_wrapper">
        <div className="flex absolute top-0 bottom-0 left-0 right-0 z-0 h-screen ">
          <Video src={introVideo} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <img
            src={downShade}
            alt="down_shade"
            height={"100%"}
            width={"100%"}
            className="h-[300px]"
          />
        </div>

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
      </div>

      <div className="w-full h-[65px] bg-blue_dark z-20 sticky top-0 -mt-[65px]">
        <nav>54564</nav>
      </div>
    </>
  );
}
