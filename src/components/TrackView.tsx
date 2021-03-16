import React from "react";

type Props = {
  track: string;
  start: number;
  end: number;
  className: string;
};

export const TrackView: React.FC<Props> = ({
  track,
  start,
  end,
  className,
}) => {
  return (
    <>
      {start <= scrollY && scrollY <= start + end && (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      )}
    </>
  );
};