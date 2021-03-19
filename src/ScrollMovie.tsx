import React, { useState, useEffect } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const defaultClassNames = {
  root: "scroll-movie",
  inner: "scroll-movie__inner",
  trackView: "scroll-movie__track-view",
  trackViewStart: "scroll-movie__track-view_start",
  trackViewEnd: "scroll-movie__track-view_end",
  labelView: "scroll-movie__label-view",
  activeLabelView: "scroll-movie__label-view-active",
  imageView: "scroll-movie__image-view",
  sliderBar: "scroll-movie__slider-bar",
  sliderBarInner: "scroll-movie__slider-bar-inner",
  sliderBarThumb: "scroll-movie__slider-bar-thumb",
  navigation: "scroll-movie__navigation",
};

type ClassNames = {
  trackView: string;
  trackViewStart: string;
  trackViewEnd: string;
  labelView: string;
  activeLabelView: string;
  imageView: string;
  sliderBar: string;
  sliderBarInner: string;
  sliderBarThumb: string;
  root: string;
  inner: string;
  navigation: string;
};

type Track = {
  html: string;
  timing: { start: number; end: number };
  buttonLabel?: string;
  animation?: { start: string; end: string };
};

export type ScrollMovieProps = {
  imageSize: number;
  getImage: (index: number) => string;
  tracks: Track[];
  scrollsPerImage: number;
  classes?: ClassNames;
};

export const ScrollMovie: React.FC<ScrollMovieProps> = ({
  getImage,
  imageSize,
  tracks,
  scrollsPerImage,
  classes = defaultClassNames,
}) => {
  const imageStartData = getImage(0);
  const [image, setImage] = useState(imageStartData);
  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const browserHeight = document.documentElement.clientHeight;
  const maxImageLength = imageSize * scrollsPerImage + browserHeight;
  const maxSliderBar = imageSize * scrollsPerImage;

  useEffect(() => {
    setTimeout(() => scrollTo({ top: 0, left: 0 }), 50);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setValue(window.scrollY);
      const imageNum = Math.trunc(window.scrollY / scrollsPerImage);
      const imageData = getImage(imageNum);
      setImage(imageData);

      // 現在activeなindexを計算
      const index = [...tracks].reverse().findIndex((t) => {
        const { buttonLabel, timing } = t;
        const { start } = timing;
        if (buttonLabel && window.scrollY >= start) {
          return true;
        }
        return false;
      });
      const active = tracks.length - index - 1;
      setActiveIndex(active);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={classes.root} style={{ height: `${maxImageLength}px` }}>
      <div className={classes.inner}>
        <ImageView image={image} className={classes.imageView} />
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackView
              classes={{
                trackView: classes.trackView,
                trackViewStart: classes.trackViewStart,
                trackViewEnd: classes.trackViewEnd,
              }}
              pos={value}
              track={track.html}
              start={track.timing.start}
              end={track.timing.end}
              animation={track.animation}
            />
          ))}

        <SliderBar
          classes={{
            outer: classes.sliderBar,
            inner: classes.sliderBarInner,
            thumb: classes.sliderBarThumb,
          }}
          max={maxSliderBar}
          value={value}
        />

        <div className={classes.navigation}>
          {tracks.length > 0 &&
            tracks.map((track, index) => (
              <LabelView
                key={index}
                classes={{
                  label: classes.labelView,
                  active: classes.activeLabelView,
                }}
                buttonLabel={track.buttonLabel}
                active={activeIndex === index}
                timing={track.timing}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
