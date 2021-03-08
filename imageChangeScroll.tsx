import React, { useState, useEffect } from "react";
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

  const maxImageLength = images.length * 150;

  const handleSliderChange = (e) => {
    setValue(e.target.value);
    scrollTo(0, e.target.value);
  };

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      let imageNum = Math.floor(scrollY / 150);
      let trackNum = Math.floor(scrollY / 2000);
      const imageData = images[imageNum];
      const trackData = tracks[trackNum];
      setImage(imageData);
      setTrack(trackData);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [image, track]);
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
