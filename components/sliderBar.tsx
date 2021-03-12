import React from "react";

const SliderBar = (props) => {
  return (
    <input
      type="range"
      id="sliderBar"
      min="0"
      max={props.maxImageLength}
      value={props.value}
      onChange={props.handleSliderChange}
    />
  );
};

export default SliderBar;
