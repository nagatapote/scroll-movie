import React from "react";

type Props = {
  track: string;
  start: number;
  end: number;
  className: {
    trackViewStart: string;
    trackViewEnd: string;
  };
};

export const TrackView: React.FC<Props> = ({
  track,
  start,
  end,
  className,
}) => {
  return (
    <>
      {start <= scrollY && scrollY <= start + end ? (
        <span
          className={className.trackViewStart}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      ) : (
        <span
          className={className.trackViewEnd}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      )}
    </>
  );
};
