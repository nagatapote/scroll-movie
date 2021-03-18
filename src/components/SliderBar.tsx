import React from "react";


type ClassNames = {
  outer: string
  inner: string
  thumb: string
}

type Props = {
  max: number;
  value: number;
  classes: ClassNames;
};

export const SliderBar: React.FC<Props> = ({ max, value, classes }) => {

  const left = `${value / max * 100}%`;

  return (
    <div className={classes.outer}>
      <div className={classes.inner} style={{ width: left }}></div>
      <div className={classes.thumb} style={{ left }}></div>
    </div>
  );
};
