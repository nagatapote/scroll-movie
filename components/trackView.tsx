import React from "react";

type Props = {
  track: string;
  timing: number;
  displayRange: number;
  className?: string;
};

export const TrackView: React.FC<Props> = ({
  track,
  timing,
  className,
  displayRange,
}) => {
  return (
    <>
      {timing <= scrollY && scrollY <= timing + displayRange && (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      )}
    </>
  );
};
