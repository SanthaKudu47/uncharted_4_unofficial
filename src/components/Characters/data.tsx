import heroBgImage1 from "../../assets/imgs/hero_bg_small_2.png";
import heroBgImage2 from "../../assets/imgs/hero_bg_small_3.png";
import nathan from "../../assets/imgs/nathan.png";
import samual from "../../assets/imgs/samual.png";
import elena from "../../assets/imgs/elena.png";
import victor from "../../assets/imgs/victor.png";

interface CharacterInfo {
  name: string;
  bgImage: string;
  characterImage: string;
  description: string;
}

const data: CharacterInfo[] = [
  {
    name: "Nathan Drake",
    bgImage: heroBgImage1,
    characterImage: nathan,
    description:
      "Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
  },
  {
    name: "Samuel Drake",
    bgImage: heroBgImage2,
    characterImage: samual,
    description:
      "Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
  },
  {
    name: "Elena Fisher",
    bgImage: heroBgImage2,
    characterImage: elena,
    description:
      "Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
  },
  {
    name: "Victor Sullivan",
    bgImage: heroBgImage2,
    characterImage: victor,
    description:
      "Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves. With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
  },
];

//Samuel Drake

export { data };
export type { CharacterInfo };
