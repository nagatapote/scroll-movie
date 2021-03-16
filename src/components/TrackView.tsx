import React from "react";

type Props = {
  track: string;
  animation?: string;
  start: number;
  end: number;
  className: {
    trackView: string;
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
  return (
    <>
      {animation == "fadeIn" ? (
        start <= scrollY && scrollY <= start + end ? (
          <span
            className={className.trackViewStart}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        ) : (
          <span
            className={className.trackViewEnd}
            dangerouslySetInnerHTML={{ __html: track }}
          />
        )
      ) : start <= scrollY && scrollY <= start + end ? (
        <span
          className={className.trackView}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      ) : (
        ""
      )}
    </>
  );
};
