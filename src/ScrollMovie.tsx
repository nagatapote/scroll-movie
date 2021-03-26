import React, { useState, useEffect } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const defaultClassNames = {
  root: "scroll-movie",
  inner: "scroll-movie__inner",
  imageView: "scroll-movie__image-view",
  trackView: "scroll-movie__track-view",
  trackViewStart: "scroll-movie__track-view_start",
  trackViewEnd: "scroll-movie__track-view_end",
  nowLoading: "scroll-movie__now-loading",
  nowLoadingNone: "scroll-movie__now-loading-none",
  sliderBar: "scroll-movie__slider-bar",
  sliderBarInner: "scroll-movie__slider-bar-inner",
  sliderBarThumb: "scroll-movie__slider-bar-thumb",
  sliderBarLabel: "scroll-movie__slider-bar-label",
  navigation: "scroll-movie__navigation",
  labelView: "scroll-movie__label-view",
  activeLabelView: "scroll-movie__label-view-active",
};

type ClassNames = {
  root: string;
  inner: string;
  imageView: string;
  trackView: string;
  trackViewStart: string;
  trackViewEnd: string;
  nowLoading: string;
  nowLoadingNone: string;
  sliderBar: string;
  sliderBarInner: string;
  sliderBarThumb: string;
  sliderBarLabel: string;
  navigation: string;
  labelView: string;
  activeLabelView: string;
};

type Track = {
  html: string;
  timing: { start: number; end: number };
  buttonLabel?: string;
  animation?: { start: string; end: string };
};

export type ScrollMovieProps = {
  classes?: ClassNames;
  tracks: Track[];
  getImage: (index: number) => string;
  imageSize: number;
  scrollsPerImage: number;
  sliderBarLength: number;
  preload?: boolean;
  nowLoadingMessage?: string;
  onTrackEnter?: () => void;
  onTrackLeave?: () => void;
};

export const ScrollMovie: React.FC<ScrollMovieProps> = ({
  classes = defaultClassNames,
  tracks,
  getImage,
  imageSize,
  scrollsPerImage,
  sliderBarLength,
  preload,
  nowLoadingMessage,
  onTrackEnter,
  onTrackLeave,
}) => {
  const imageStartData = getImage(0);
  const [image, setImage] = useState(imageStartData);
  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadState, setLoadState] = useState(1);
  const browserHeight = document.documentElement.clientHeight;
  const maxImageLength = imageSize * scrollsPerImage + browserHeight;
  const maxSliderBar = imageSize * scrollsPerImage;

  const loadImage = (i: number) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.src = getImage(i);
    });
  };

  async function loadAllImages() {
    const promises = [];
    for (let i = 0; i <= imageSize; i++) {
      promises.push(loadImage(i));
    }
    await Promise.all(promises);
  }

  useEffect(() => {
    setTimeout(() => scrollTo({ top: 0, left: 0 }), 50);
    if (preload === true) {
      setTimeout(async () => {
        const scrollControl = (event) => {
          event.preventDefault();
        };
        document.addEventListener("touchmove", scrollControl, {
          passive: false,
        });
        document.addEventListener("mousewheel", scrollControl, {
          passive: false,
        });
        await loadAllImages();
        setLoadState(0);
        document.removeEventListener("touchmove", scrollControl);
        document.removeEventListener("mousewheel", scrollControl);
      }, 100);
    }
  }, [preload]);

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
              track={track.html}
              start={track.timing.start}
              end={track.timing.end}
              animation={track.animation}
              pos={value}
              onTrackEnter={onTrackEnter}
              onTrackLeave={onTrackLeave}
            />
          ))}
        <span
          className={
            preload === true && loadState === 1
              ? classes.nowLoading
              : classes.nowLoadingNone
          }
        >
          <span dangerouslySetInnerHTML={{ __html: nowLoadingMessage }} />
        </span>
        <SliderBar
          classes={{
            outer: classes.sliderBar,
            inner: classes.sliderBarInner,
            thumb: classes.sliderBarThumb,
            label: classes.sliderBarLabel,
          }}
          tracks={tracks}
          sliderBarLength={sliderBarLength}
          max={maxSliderBar}
          value={value}
        />

        <div className={classes.navigation}>
          {tracks.length > 0 &&
            tracks.map((track, index) => (
              <LabelView
                classes={{
                  label: classes.labelView,
                  active: classes.activeLabelView,
                }}
                timing={track.timing}
                buttonLabel={track.buttonLabel}
                active={activeIndex === index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
