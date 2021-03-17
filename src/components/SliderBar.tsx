import React from "react";

type Props = {
  max: number;
  value: number;
  className: string;
};

export const SliderBar: React.FC<Props> = ({ max, value, className }) => {
  return (
    <input
      type="range"
      className={className}
      disabled={true}
      min={0}
      max={max}
      value={value}
    />
  );
};
