import heroBgImage from "../../../assets/imgs/hero_bg_small_2.png";
import bgShade from "../../../assets/imgs/bg_image_shade.png";
import nathan from "../../../assets/imgs/nathan.png";
import { useRef } from "react";

import "./styles.css";
import { CharacterInfo } from "../data";
import useInView from "../../../hooks/useInView";

export default function Character({
  name = "Nathan Drake",
  bgImage = heroBgImage,
  characterImage = nathan,
  description = "Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
}: CharacterInfo) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { threshold: "init", once: false });
  return (
    <div className="bg-blue_dark relative  h-full w-full" ref={containerRef}>
      <div
        className={`flex relative flex-col w-full h-full overflow-hidden z-0`}
      >
        <img
          draggable={false}
          src={bgImage}
          alt="hero_bg"
          className={`w-full h-full object-cover z-0 bg_image ${
            isInView ? "bg_image_animation" : "bg_image_animation_revert"
          }`}
        />

        <div
          className={`absolute flex justify-center left-0 right-0 top-[70px] sm:top-[100px] text ${
            isInView ? "text_animation" : ""
          }`}
        >
          <h1 className="text-white_v1 font-base font-bold text-[50px] sm:text-[90px] text-center">
            {name}
          </h1>
        </div>

        <div
          className={`absolute  z-10 left-0 right-0  bottom-0 sm:bottom-[250px]  sm:w-5/6 mx-auto flex justify-center  character ${
            isInView ? "character_animation" : "character_animation_revert"
          }`}
        >
          <img src={characterImage} alt="character_img" />
        </div>
        <img
          src={bgShade}
          alt="shade"
          className="absolute z-10 bottom-0 w-full sm:bottom-[250px]"
        />

        {/* <div className="w-full h-[30px] bg-blue_dark absolute bottom-0 z-10"></div> */}
      </div>
      <div className="relative sm:-mt-[250px] font-base px-5 shrink-0 text-[20px] sm:text-[30px] text-white_v1 text-justify indent-4 text-pretty z-30 bg-blue_dark">
        <p>{description}</p>
      </div>
    </div>
  );
}
