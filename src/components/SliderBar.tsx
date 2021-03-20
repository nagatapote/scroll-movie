import React from "react";

type ClassNames = {
  outer: string;
  inner: string;
  thumb: string;
  label: string;
};

type Track = {
  html: string;
  timing: { start: number; end: number };
  buttonLabel?: string;
  animation?: { start: string; end: string };
};

type Props = {
  classes: ClassNames;
  tracks: Track[];
  sliderBarLength: number;
  max: number;
  value: number;
};

export const SliderBar: React.FC<Props> = ({
  classes,
  tracks,
  sliderBarLength,
  max,
  value,
}) => {
  const left = `${(value / max) * 100}%`;
  let num = 0;
  return (
    <div>
      <div className={classes.outer} style={{ width: `${sliderBarLength}%` }}>
        <div className={classes.inner} style={{ width: left }}></div>
        <div className={classes.thumb} style={{ left }}></div>
      </div>
      {tracks.map((track) => (
        <a
          className={classes.label}
          style={{
            width: `${sliderBarLength}%`,
            marginLeft: `${(track.timing.start / max) * sliderBarLength}%`,
          }}
        >
          {track.buttonLabel && ++num}
        </a>
      ))}
    </div>
  );
};
