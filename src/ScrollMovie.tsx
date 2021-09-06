import React, { useState, useEffect } from "react";
import { ImageView, SliderBar, TrackView, LabelView } from "./components/index";
import smoothscroll from "smoothscroll-polyfill";
import clsx from "clsx";

smoothscroll.polyfill();

const defaultClassNames = {
  root: "scroll-movie",
  rootLoading: "scroll-movie--is-loading",
  inner: "scroll-movie__inner",
  imageView: "scroll-movie__image-view",
  trackView: "scroll-movie__track-view",
  trackViewStart: "scroll-movie__track-view_start",
  trackViewEnd: "scroll-movie__track-view_end",
  nowLoading: "scroll-movie__now-loading",
  nowLoadingNone: "scroll-movie__now-loading-none",
  sliderBarTop: "scroll-movie__slider-bar-top",
  sliderBarTopInner: "scroll-movie__slider-bar-top-inner",
  sliderBarTopThumb: "scroll-movie__slider-bar-top-thumb",
  controllWrap: "scroll-movie__controll-wrap",
  sliderBarWrap: "scroll-movie__slider-bar-wrap",
  sliderBarLabelWrap: "scroll-movie__slider-bar-label-wrap",
  sliderBar: "scroll-movie__slider-bar",
  sliderBarInner: "scroll-movie__slider-bar-inner",
  sliderBarThumb: "scroll-movie__slider-bar-thumb",
  sliderBarLabel: "scroll-movie__slider-bar-label",
  sliderBarLabelButton: "scroll-movie__slider-bar-label-button",
  sliderBarLabelButtonActive: "scroll-movie__slider-bar-label-button-active",
  navigation: "scroll-movie__navigation",
  navigationDisplayBefore: "scroll-movie__navigation-display-before",
  navigationDisplayAfter: "scroll-movie__navigation-display-after",
  labelView: "scroll-movie__label-view",
  activeLabelView: "scroll-movie__label-view-active",
};

type ClassNames = {
  root: string;
  rootLoading: string;
  inner: string;
  imageView: string;
  trackView: string;
  trackViewStart: string;
  trackViewEnd: string;
  nowLoading: string;
  nowLoadingNone: string;
  sliderBarTop: string;
  sliderBarTopInner: string;
  sliderBarTopThumb: string;
  controllWrap: string;
  sliderBarWrap: string;
  sliderBarLabelWrap: string;
  sliderBar: string;
  sliderBarInner: string;
  sliderBarThumb: string;
  sliderBarLabel: string;
  sliderBarLabelButton: string;
  sliderBarLabelButtonActive: string;
  navigation: string;
  navigationDisplayBefore: string;
  navigationDisplayAfter: string;
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
  preload?: boolean;
  preloadTimes?: number;
  navigationDisplayTiming?: number;
  navigationDisabledBrowserSize?: { height: number; width: number };
  nowLoadingMessage?: string;
  onTrackEnter?: (target: HTMLElement) => void;
  onTrackLeave?: (target: HTMLElement) => void;
};

export const ScrollMovie: React.FC<ScrollMovieProps> = ({
  classes = {},
  tracks,
  getImage,
  imageSize,
  scrollsPerImage,
  preload = false,
  preloadTimes = 0,
  navigationDisplayTiming,
  navigationDisabledBrowserSize = {},
  nowLoadingMessage = "<div>NowLoading</div>",
  onTrackEnter,
  onTrackLeave,
}) => {
  const imageStartData = getImage(0);
  const [image, setImage] = useState(imageStartData);
  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadState, setLoadState] = useState(1);
  const [browserHeight, setBrowserHeight] = useState(0);
  const [browserWidth, setBrowserWidth] = useState(0);
  const maxImageLength = imageSize * scrollsPerImage + browserHeight;
  const maxSliderBar = imageSize * scrollsPerImage;
  const classNames = { ...defaultClassNames, ...classes };
  const disabledBrowserSize = {
    width: 0,
    height: 0,
    ...navigationDisabledBrowserSize,
  };

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
        if (preloadTimes === 0) {
          await loadAllImages()
        } else {
            await new Promise(resolve => setTimeout(resolve, preloadTimes))
        }
        setLoadState(0);
        document.removeEventListener("touchmove", scrollControl);
        document.removeEventListener("mousewheel", scrollControl);
      }, 100);
    }
  }, [preload]);

  useEffect(() => {
    setBrowserHeight(window.innerHeight);
    setBrowserWidth(window.innerWidth);
    const onResize = () => {
      setBrowserHeight(window.innerHeight);
      setBrowserWidth(window.innerWidth);
    }
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
    window.addEventListener("resize", onResize)

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return (
    <div 
      className={clsx(classNames.root, {
        [classNames.rootLoading]: preload && loadState === 1
      })} 
      style={{ height: `${maxImageLength}px` }}
    >
      <div className={classNames.inner}>
        <ImageView image={image} className={classNames.imageView} />
        <SliderBar
          classes={{
            outer: classNames.sliderBarTop,
            inner: classNames.sliderBarTopInner,
            thumb: classNames.sliderBarTopThumb,
          }}
          tracks={tracks}
          max={maxSliderBar}
          value={value}
        />
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackView
              classes={{
                trackView: classNames.trackView,
                trackViewStart: classNames.trackViewStart,
                trackViewEnd: classNames.trackViewEnd,
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
              ? classNames.nowLoading
              : classNames.nowLoadingNone
          }
        >
          <span dangerouslySetInnerHTML={{ __html: nowLoadingMessage }} />
        </span>
        <div className={classNames.controllWrap}>
          <div className={classNames.sliderBarWrap}>
            <div className={classNames.sliderBarLabelWrap}>
              <SliderBar
                classes={{
                  outer: classNames.sliderBar,
                  inner: classNames.sliderBarInner,
                  thumb: classNames.sliderBarThumb,
                  label: classNames.sliderBarLabel,
                  button: classNames.sliderBarLabelButton,
                  buttonActive: classNames.sliderBarLabelButtonActive,
                  before: classNames.navigationDisplayBefore,
                  after: classNames.navigationDisplayAfter,
                }}
                tracks={tracks}
                navigationDisplayTiming={navigationDisplayTiming}
                navigationDisabledBrowserSize={disabledBrowserSize}
                max={maxSliderBar}
                value={value}
                browserHeight={browserHeight}
                browserWidth={browserWidth}
                labelRequired
              />
            </div>
          </div>
          <div className={classNames.navigation}>
            {tracks.length > 0 &&
              tracks.map((track, index) => (
                <LabelView
                  classes={{
                    label: classNames.labelView,
                    active: classNames.activeLabelView,
                    before: classNames.navigationDisplayBefore,
                    after: classNames.navigationDisplayAfter,
                  }}
                  timing={track.timing}
                  buttonLabel={track.buttonLabel}
                  active={activeIndex === index}
                  navigationDisplayTiming={navigationDisplayTiming}
                  navigationDisabledBrowserSize={disabledBrowserSize}
                  value={value}
                  browserHeight={browserHeight}
                  browserWidth={browserWidth}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
