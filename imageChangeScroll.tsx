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

  const maxImageLength = images.length * 150;

  useEffect(() => {
    const onScroll = () => {
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
    <div id="home">
      <div className="image">
        <ImageView image={image} />
        <TextView track={track} />
      </div>
    </div>
  );
};

export default ImagesChangeScroll;
