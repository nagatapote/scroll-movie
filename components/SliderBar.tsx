import React from "react";

type Props = {
  max: number;
  value: number;
  className?: string;
};

export const SliderBar: React.FC<Props> = ({ 
  max, 
  value, 
  className = 'scroll-movie__slider-bar'
}) => {
  return (
    <input
      type="range"
      disabled={true}
      className={className}
      min={0}
      max={max}
      value={value}
    />
  );
};
