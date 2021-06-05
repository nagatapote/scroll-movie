import React, { useEffect, useRef } from "react";

type ClassName = {
  trackView: string;
  trackViewStart: string;
  trackViewEnd: string;
};

type Props = {
  classes: ClassName;
  track: string;
  start: number;
  end: number;
  animation?: { start: string; end: string };
  pos: number;
  onTrackEnter?: (target: HTMLElement) => void;
  onTrackLeave?: (target: HTMLElement) => void;
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
  classes,
  track,
  animation,
  start,
  end,
  pos,
  onTrackEnter,
  onTrackLeave,
}) => {
  const currentStatus = pos < start ? 0 : start <= pos && pos <= end ? 1 : 2;
  const className = getClassNameFromStatus(currentStatus, classes, animation);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = ref.current;
    const atag = target.getElementsByTagName("a");
    if (onTrackEnter && target && currentStatus === 1) {
      onTrackEnter(target);
      for (let i = 0; i < atag.length; i++) {
        const a = atag[i];
        a.addEventListener("click", (e) => {
          if ((e.target as Element).getAttribute("href").indexOf("#") !== -1) {
            e.preventDefault();
            const start = parseInt(a.getAttribute("href").replace("#", ""));
            scrollTo({ top: start, left: 0, behavior: "smooth" });
          }
        });
      }
    } else if (onTrackLeave && target && currentStatus === 2) {
      onTrackLeave(target);
    }
  }, [currentStatus]);

  return (
    <span
      ref={ref}
      className={`${classes.trackView}${className ? ` ${className}` : ""}`}
      dangerouslySetInnerHTML={{ __html: track }}
    />
  );
};
