import React, { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { ImageView, SliderBar, TrackView, TextView } from "./components/index";
import "./style.css";

type Props = {
  images: string[];
  tracks: string[];
  buttonTexts: string[];
  imageTiming: number;
  trackTiming: number;
  slide: number;
  trackDisplayX: number;
  trackDisplayY: number;
  trackDisappear: number;
  trackTopTiming: number;
  trackBottomTiming: number;
};

const ImagesChangeScroll: React.FC<Props> = ({
  images,
  tracks,
  buttonTexts,
  imageTiming,
  trackTiming,
  slide,
  trackDisplayX,
  trackDisplayY,
  trackDisappear,
  trackTopTiming,
  trackBottomTiming,
}) => {
  const [image, setImage] = useState("");
  const [track, setTrack] = useState("");
  const [value, setValue] = useState(0);
  const [trackDisplay, setTrackDisplay] = useState(0);
  const [trackTop, setTrackTop] = useState(0);
  const [trackBottom, setTrackBottom] = useState(0);

  smoothscroll.polyfill();

  const maxImageLength = images.length * imageTiming;
  const tracksSpeed = images.length * trackTiming;

  const handleSliderChange = (e) => {
    setValue(e.target.value);
    scrollTo({ top: e.target.value, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "0";
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transform = `translate(${trackDisplayX}px, ${trackDisappear}px)`;
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transition = `all ${slide}s`;
  }, [trackBottom]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "1";
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transform = `translate(${trackDisplayX}px, ${trackDisplayY}px)`;
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transition = `all ${slide}s`;
  }, [trackDisplay]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "0";
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transform = `translate(${trackDisplayX}px, -${trackDisappear}px)`;
    (document.getElementById(
      "track"
    ) as HTMLStyleElement).style.transition = `all ${slide}s`;
  }, [trackTop]);

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      const imageNum = Math.floor(scrollY / imageTiming);
      const trackNum = Math.floor(scrollY / tracksSpeed);
      const trackNumBottom = Math.floor(
        (scrollY - tracksSpeed * trackBottomTiming) / tracksSpeed
      );
      const trackNumTop = Math.floor(
        (scrollY - tracksSpeed * trackTopTiming) / tracksSpeed
      );
      const imageData = images[imageNum];
      const trackData = tracks[trackNum];
      setImage(imageData);
      setTrack(trackData);
      setTrackBottom(trackNumBottom);
      setTrackDisplay(trackNum);
      setTrackTop(trackNumTop);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [image, track]);
  return (
    <div className="home">
      <div className="image">
        <ImageView image={image} />
        <TrackView track={track} />
        <SliderBar
          min="0"
          maxImageLength={maxImageLength}
          value={value}
          handleSliderChange={handleSliderChange}
        />
        <div className="button">
          {buttonTexts.length > 0 &&
            buttonTexts.map((buttonText, index) => (
              <TextView
                buttonText={buttonText}
                length={buttonTexts.length}
                maxImageLength={maxImageLength}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesChangeScroll;
