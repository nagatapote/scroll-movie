import React from "react";

type ClassName = {
  trackViewStart: string;
  trackViewEnd: string;
  trackView: string;
};

type Props = {
  pos: number;
  track: string;
  animation?: { start: string; end: string };
  start: number;
  end: number;
  classes: ClassName;
};

const getClassNameFromStatus = (
  status: number,
  classes: ClassName,
  animation: { start: string; end: string }
) => {
  if (status === 0) {
    return "";
  } else if (status === 1) {
    return animation?.start ?? classes.trackViewStart;
  }
  return animation?.end ?? classes.trackViewEnd;
};

export const TrackView: React.FC<Props> = ({
  track,
  pos,
  animation,
  start,
  end,
  classes,
}) => {
  const currentStatus = pos < start ? 0 : start <= pos && pos <= end ? 1 : 2;
  const className = getClassNameFromStatus(currentStatus, classes, animation);

  return (
    <span
      className={`${classes.trackView}${className ? ` ${className}` : ""}`}
      dangerouslySetInnerHTML={{ __html: track }}
    />
  );
};
