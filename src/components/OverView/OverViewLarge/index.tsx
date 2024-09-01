import inActionImage from "../../../assets/imgs/in_action_large.png";
import inActionGray from "../../../assets/imgs/in_action_gray_large.png";
import SectionTitle from "../../SectionTitle";
import ImageAnimation from "../ImageAnimation";
import TextParagraph from "../TextParagraph";

import "./styles.css";

export default function OverViewLarge() {
  return (
    <div className="relative w-full  bg-blue_dark h-[865px]">
      <div className="flex flex-row max-w-screen-xl mx-auto">
        <div className="flex bg-white h-auto">
          <ImageAnimation
            grayImageSrc={inActionGray}
            colorImageSrc={inActionImage}
            size="lg"
          />
          {/* <div className="w-[400px] h-screen overflow-hidden">
            <img src={inActionImage} alt="in_action_large" />
          </div> */}
        </div>
        <div
          className={`flex w-full flex-col bg_image bg-cover bg-left-bottom px-5 items-center overflow-hidden`}
        >
          <div className="flex w-full justify-end  mt-16 mb-5">
            <SectionTitle title="OVERVIEW" isInView={true} />
          </div>
          <div className="flex w-full justify-end my-5">
            <h3 className="font-base font-bold text-[35px] sm:text-[40px] text-white_v1 leading-10 text-right">
              Every treasure has its price.
            </h3>
          </div>
          <div className="ml-10">
            <TextParagraph>
              <p>
                Set three years after the events of UNCHARTED 3: Drake's
                Deception, Nathan Drake has presumably left the world of
                fortune-hunting behind. However, it doesn't take long for fate
                to come calling when Drake s brother, Sam, resurfaces seeking
                his help to save his own life and offering an adventure Drake
                can't resist.
              </p>
            </TextParagraph>

            <TextParagraph>
              <p>
                On the hunt for Captain Henry Avery's long-lost treasure, Sam
                and Drake set off to find Libertalia, the pirate utopia deep in
                the forests of Madagascar. UNCHARTED 4: A Thief's End takes
                players on a journey around the globe, through jungle isles,
                far-flung cities and snow-capped peaks on the search for Avery's
                fortune.
              </p>
            </TextParagraph>
          </div>
        </div>
      </div>
    </div>
  );
}
