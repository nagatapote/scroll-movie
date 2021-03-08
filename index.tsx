import React from "react";
import { render } from "react-dom";
import ImageChangeScroll from "./imageChangeScroll";
import data from "./data";

const Index = () => {
  const images = data.images;
  const tracks = data.tracks;
  return (
    <div>
      <ImageChangeScroll images={images} tracks={tracks} />
    </div>
  );
};

export default Index;

render(<Index />, document.getElementById("app"));
