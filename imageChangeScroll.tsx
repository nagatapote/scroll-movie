import React, { useState, useEffect, useCallback, useRef } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";
import "./style.css";

type Props = {
  imageSize: number;
  getImage: (index: number) => string;
  tracks: any[];
  scrollsPerImage: number;
  classNames: any;
};

export const ImageChangeScroll: React.FC<Props> = ({
  getImage,
  imageSize,
  tracks,
  scrollsPerImage,
  classNames,
}) => {
  const rootRef = useRef<HTMLDivElement>();
  const [image, setImage] = useState("");
  const [value, setValue] = useState(0);
  const maxImageLength = imageSize * scrollsPerImage;

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<{ value: number }>) => {
      setValue(e.target.value);
      scrollTo({ top: e.target.value, left: 0, behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      const imageNum = Math.floor(scrollY / scrollsPerImage);
      const imageData = getImage(imageNum);
      setImage(imageData);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [image]);
  return (
    <div className="home" ref={rootRef}>
      <div className="image">
        <ImageView image={image} />
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackView
              className={classNames.trackView}
              track={track.html}
              timing={track.timing}
              display={track.display}
            />
          ))}
        <SliderBar
          className={classNames.sliderBar}
          max={maxImageLength}
          value={value}
          handleSliderChange={handleSliderChange}
        />
        <div className="button">
          {tracks.length > 0 &&
            tracks.map((track) => (
              <LabelView
                className={classNames.labelView}
                buttonLabel={track.buttonLabels}
                timing={track.timing}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
