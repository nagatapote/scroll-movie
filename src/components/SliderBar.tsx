import React from "react";

type ClassNames = {
  outer: string;
  inner: string;
  thumb: string;
  label?: string;
  button?: string;
  buttonActive?: string;
  before?: string;
  after?: string;
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
  navigationDisplayTiming?: number;
  navigationDisabledBrowserSize?: { height: number; width: number };
  max: number;
  value: number;
  labelRequired?: boolean;
  browserHeight?: number;
  browserWidth?: number;
};

export const SliderBar: React.FC<Props> = ({
  classes,
  tracks,
  navigationDisplayTiming,
  navigationDisabledBrowserSize,
  max,
  value,
  labelRequired,
  browserHeight,
  browserWidth,
}) => {
  const handleClick = (start: number) => {
    return scrollTo({ top: start, left: 0, behavior: "smooth" });
  };
  const left = `${(value / max) * 100}%`;
  let num = 0;
  return (
    <div
      className={
        labelRequired &&
        (value < navigationDisplayTiming ||
          browserHeight < navigationDisabledBrowserSize.height ||
          browserWidth < navigationDisabledBrowserSize.width)
          ? classes.before
          : classes.after
      }
    >
      <div className={classes.outer}>
        <div className={classes.inner} style={{ width: left }}></div>
        <div className={classes.thumb} style={{ left }}></div>
      </div>
      {labelRequired && (
        <div>
          {tracks.map((track) => (
            <a
              className={classes.label}
              style={{
                marginLeft: `${(track.timing.start / max) * 100}%`,
              }}
            >
              {track.buttonLabel && (
                <span
                  className={
                    value <= track.timing.start
                      ? classes.button
                      : classes.button && classes.buttonActive
                  }
                  onClick={() => handleClick(track.timing.start)}
                >
                  {(num += 1)}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
