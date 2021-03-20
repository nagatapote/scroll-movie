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
  max: number;
  value: number;
  tracks: Track[];
  classes: ClassNames;
};

export const SliderBar: React.FC<Props> = ({ max, value, classes, tracks }) => {
  const left = `${(value / max) * 100}%`;
  let num = 0;
  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.inner} style={{ width: left }}></div>
        <div className={classes.thumb} style={{ left }}></div>
      </div>
      {tracks.map((track) => (
        <a
          className={classes.label}
          style={{ marginLeft: `${(track.timing.start / max) * 60}%` }}
        >
          {track.buttonLabel && ++num}
        </a>
      ))}
    </div>
  );
};
