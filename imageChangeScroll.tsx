import React, { useState, useEffect, useRef } from "react";
import ImageView from "./components/imageView";
import TextView from "./components/textView";
import "./style.css";

type Props = {
  images: string[];
  tracks: string[];
};

const ImagesChangeScroll: React.FC<Props> = ({ images, tracks }) => {
  const [image, setImage] = useState("");
  const [track, setTrack] = useState("");
  const [value, setValue] = useState(0);
  const [trackDisplay, setTrackDisplay] = useState(0);
  const [trackDisplayS, setTrackDisplayS] = useState(0);
  const [trackTop, setTrackTop] = useState(0);
  const [trackBottom, setTrackBottom] = useState(0);

  const maxImageLength = images.length * 150;

  const handleSliderChange = (e) => {
    setValue(e.target.value);
    scrollTo(0, e.target.value);
  };

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "0";
    (document.getElementById("track") as HTMLStyleElement).style.transform =
      "translate(-200px, 600px)";
    (document.getElementById("track") as HTMLStyleElement).style.transition =
      "all 0.5s";
  }, [trackBottom]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "1";
    (document.getElementById("track") as HTMLStyleElement).style.transform =
      "translate(-200px, -50px)";
    (document.getElementById("track") as HTMLStyleElement).style.transition =
      "all 0.5s";
  }, [trackDisplay]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "1";
    (document.getElementById("track") as HTMLStyleElement).style.transform =
      "translate(-200px, -50px)";
    (document.getElementById("track") as HTMLStyleElement).style.transition =
      "all 0.5s";
  }, [trackDisplayS]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "0";
    (document.getElementById("track") as HTMLStyleElement).style.transform =
      "translate(-200px, -600px)";
    (document.getElementById("track") as HTMLStyleElement).style.transition =
      "all 0.5s";
  }, [trackTop]);

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      let imageNum = Math.floor(scrollY / 150);
      let trackNum = Math.floor(scrollY / 10000);
      let trackNumTop = Math.floor((scrollY - 8000) / 10000);
      let trackNumDisplay = Math.floor((scrollY - 7000) / 10000);
      let trackNumDisplayS = Math.floor((scrollY - 3000) / 10000);
      let trackNumBottom = Math.floor((scrollY - 2000) / 10000);
      const imageData = images[imageNum];
      const trackData = tracks[trackNum];
      setImage(imageData);
      setTrack(trackData);
      setTrackDisplayS(trackNumDisplayS);
      setTrackDisplay(trackNumDisplay);
      setTrackTop(trackNumTop);
      setTrackBottom(trackNumBottom);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [image, track, trackDisplay, trackDisplayS, trackTop, trackBottom]);
  return (
    <div className="home">
      <div className="image">
        <ImageView image={image} />
        <TextView track={track} />
        <input
          type="range"
          name="sliderBar"
          min="0"
          max={maxImageLength}
          value={value}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default ImagesChangeScroll;
