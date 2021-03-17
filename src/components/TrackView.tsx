import React, { useState, useEffect } from "react";

type Props = {
  track: string;
  animation?: { start: string; end: string };
  start: number;
  end: number;
  className: {
    trackViewStart: string;
    trackViewEnd: string;
  };
};

export const TrackView: React.FC<Props> = ({
  track,
  animation,
  start,
  end,
  className,
}) => {
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const onFlag = () => {
      if (scrollY >= start) {
        setFlag(1);
      }
    };
    document.addEventListener("scroll", onFlag);

    return () => document.removeEventListener("scroll", onFlag);
  }, []);
  return (
    <>
      {flag === 0 &&
        animation &&
        start <= scrollY &&
        scrollY <= start + end && (
          <span
            className={animation.start}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}
      {flag === 0 &&
        animation &&
        (scrollY > start + end || scrollY < start) && (
          <span
            className={animation.end}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}
      {flag === 1 &&
        animation &&
        start <= scrollY &&
        scrollY <= start + end && (
          <span
            className={animation.start}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}
      {flag === 1 &&
        animation &&
        (scrollY > start + end || scrollY < start) && (
          <span
            className={animation.end}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}

      {flag === 1 &&
        !animation &&
        start <= scrollY &&
        scrollY <= start + end && (
          <span
            className={className.trackViewStart}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}
      {flag === 1 &&
        !animation &&
        (scrollY > start + end || scrollY < start) && (
          <span
            className={className.trackViewEnd}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )}
    </>
  );
};
