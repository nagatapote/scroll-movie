import React, { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
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

  const scrollButtonNumB = maxImageLength / 5;
  const scrollButtonNumC = (maxImageLength / 5) * 2;
  const scrollButtonNumD = maxImageLength - (maxImageLength / 5) * 2;
  const scrollButtonNumE = maxImageLength - maxImageLength / 5;

  smoothscroll.polyfill();

  const scrollButtonA = () => {
    return scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const scrollButtonB = () => {
    return scrollTo({ top: scrollButtonNumB, left: 0, behavior: "smooth" });
  };
  const scrollButtonC = () => {
    return scrollTo({ top: scrollButtonNumC, left: 0, behavior: "smooth" });
  };
  const scrollButtonD = () => {
    return scrollTo({ top: scrollButtonNumD, left: 0, behavior: "smooth" });
  };
  const scrollButtonE = () => {
    return scrollTo({ top: scrollButtonNumE, left: 0, behavior: "smooth" });
  };
  const scrollButtonF = () => {
    return scrollTo({ top: maxImageLength, left: 0, behavior: "smooth" });
  };

  const handleSliderChange = (e) => {
    setValue(e.target.value);
    scrollTo({ top: e.target.value, left: 0, behavior: "smooth" });
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
      "translate(-200px, -250px)";
    (document.getElementById("track") as HTMLStyleElement).style.transition =
      "all 0.5s";
  }, [trackDisplay]);

  useEffect(() => {
    (document.getElementById("track") as HTMLStyleElement).style.opacity = "1";
    (document.getElementById("track") as HTMLStyleElement).style.transform =
      "translate(-200px, -250px)";
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
          id="sliderBar"
          min="0"
          max={maxImageLength}
          value={value}
          onChange={handleSliderChange}
        />
        <div className="button">
          <input type="button" value="1" onClick={() => scrollButtonA()} />
          <input type="button" value="2" onClick={() => scrollButtonB()} />
          <input type="button" value="3" onClick={() => scrollButtonC()} />
          <input type="button" value="4" onClick={() => scrollButtonD()} />
          <input type="button" value="5" onClick={() => scrollButtonE()} />
          <input type="button" value="6" onClick={() => scrollButtonF()} />
        </div>
      </div>
    </div>
  );
};

export default ImagesChangeScroll;
