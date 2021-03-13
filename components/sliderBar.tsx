import React from "react";

type Props = {
  max: number;
  value: number;
  handleSliderChange: any;
  className?: any;
};

export const SliderBar: React.FC<Props> = ({
  max,
  value,
  handleSliderChange,
  className,
}) => {
  return (
    <input
      type="range"
      disabled={true}
      className={className}
      min={0}
      max={max}
      value={value}
      onChange={handleSliderChange}
    />
  );
};
