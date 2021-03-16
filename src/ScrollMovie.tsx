import React, { useState, useEffect } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";

const defaultClassNames = {
  root: "scroll-movie",
  inner: "scroll-movie__inner",
  trackView: "scroll-movie__track-view",
  labelView: "scroll-movie__label-view",
  imageView: "scroll-movie__image-view",
  sliderBar: "scroll-movie__slider-bar",
  navigation: "scroll-movie__navigation",
};

type ClassNames = {
  trackView: string;
  labelView: string;
  imageView: string;
  sliderBar: string;
  root: string;
  inner: string;
  navigation: string;
};

type Props = {
  imageSize: number;
  getImage: (index: number) => string;
  tracks: {
    html: string;
    timing: { start: number; end: number };
    buttonLabel: string;
  }[];
  scrollsPerImage: number;
  classNames?: ClassNames;
};

export const ScrollMovie: React.FC<Props> = ({
  getImage,
  imageSize,
  tracks,
  scrollsPerImage,
  classNames = defaultClassNames,
}) => {
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
    <div className={classNames.root} style={{ height: maxImageLength }}>
      <div className={classNames.inner}>
        <ImageView image={image} className={classNames.imageView} />
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackView
              className={classNames.trackView}
              track={track.html}
              start={track.timing.start}
              end={track.timing.end}
            />
          ))}
        <SliderBar
          className={classNames.sliderBar}
          max={maxImageLength}
          value={value}
        />
        <div className={classNames.navigation}>
          {tracks.length > 0 &&
            tracks.map((track) => (
              <LabelView
                className={classNames.labelView}
                buttonLabel={track.buttonLabel}
                start={track.timing.start}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
