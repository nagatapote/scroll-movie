import React, { useState, useEffect, useRef } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";
import "./style.css";

type Props = {
  imageSize: number;
  getImage: (index: number) => string;
  tracks: {
    html: string;
    timing: number;
    displayRange: number;
    buttonLabel: string;
  }[];
  scrollsPerImage: number;
  classNames?: any;
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
              displayRange={track.displayRange}
            />
          ))}
        <SliderBar
          className={classNames.sliderBar}
          max={maxImageLength}
          value={value}
        />
        <div className="button">
          {tracks.length > 0 &&
            tracks.map((track) => (
              <LabelView
                className={classNames.labelView}
                buttonLabel={track.buttonLabel}
                timing={track.timing}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
