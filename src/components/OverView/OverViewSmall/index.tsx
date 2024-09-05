import { useRef } from "react";
import grayImage from "../../../assets/imgs/in_action_gray_small.png";
import colorImage from "../../../assets/imgs/in_action_small.png";
import ImageAnimation from "../ImageAnimation";
import SectionTitle from "../../SectionTitle";
import useInView from "../../../hooks/useInView";
import TextParagraph from "../TextParagraph";

export default function OverViewSmall() {
  const refTitleText = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(refTitleText, {
    threshold: "full",
    once: true,
  });

  return (
    <div className="bg-blue_dark">
      <div className=" w-full">
        <ImageAnimation
          grayImageSrc={grayImage}
          colorImageSrc={colorImage}
          size="sm"
        />
        <div className="h-auto px-5 relative">
          <div className="mb-10 mt-16" ref={refTitleText}>
            <SectionTitle title="OVERVIEW" isInView={isTextInView} />
          </div>

          <div>
            <h3 className="font-base font-bold text-[35px] sm:text-[40px] text-white_v1 leading-10">
              Every treasure has its price.
            </h3>
          </div>
          <TextParagraph>
            <p>
              Set three years after the events of UNCHARTED 3: Drake's
              Deception, Nathan Drake has presumably left the world of
              fortune-hunting behind. However, it doesn't take long for fate to
              come calling when Drake s brother, Sam, resurfaces seeking his
              help to save his own life and offering an adventure Drake can't
              resist.
            </p>
          </TextParagraph>

          <TextParagraph>
            <p>
              On the hunt for Captain Henry Avery's long-lost treasure, Sam and
              Drake set off to find Libertalia, the pirate utopia deep in the
              forests of Madagascar. UNCHARTED 4: A Thief's End takes players on
              a journey around the globe, through jungle isles, far-flung cities
              and snow-capped peaks on the search for Avery's fortune.
            </p>
          </TextParagraph>
        </div>
      </div>
    </div>
  );
}
