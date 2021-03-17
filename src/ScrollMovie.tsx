import React, { useState, useEffect } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";

const defaultClassNames = {
  root: "scroll-movie",
  inner: "scroll-movie__inner",
  trackViewStart: "scroll-movie__track-view_start",
  trackViewEnd: "scroll-movie__track-view_end",
  labelView: "scroll-movie__label-view",
  imageView: "scroll-movie__image-view",
  sliderBar: "scroll-movie__slider-bar",
  navigation: "scroll-movie__navigation",
};

type ClassNames = {
  trackViewStart: string;
  trackViewEnd: string;
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
    buttonLabel?: string;
    animation?: { start: string; end: string };
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
  const imageStartData = getImage(0);
  const [image, setImage] = useState(imageStartData);
  const [value, setValue] = useState(0);
  const browserHeight = document.documentElement.clientHeight;
  const maxImageLength = imageSize * scrollsPerImage + browserHeight;

  useEffect(() => {
    setTimeout(() => scrollTo({ top: 0, left: 0 }), 50);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      const imageNum = Math.trunc(scrollY / scrollsPerImage);
      const imageData = getImage(imageNum);
      setImage(imageData);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [image]);
  return (
    <div className={classNames.root} style={{ height: `${maxImageLength}px` }}>
      <div className={classNames.inner}>
        <ImageView image={image} className={classNames.imageView} />
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackView
              className={classNames}
              track={track.html}
              start={track.timing.start}
              end={track.timing.end}
              animation={track.animation}
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
