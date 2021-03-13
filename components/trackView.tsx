import React from "react";

type Props = {
  track: string;
  timing: number;
  display: number;
  className?: string;
};

export const TrackView: React.FC<Props> = ({
  track,
  timing,
  className,
  display,
}) => {
  return (
    <>
      {timing <= scrollY && scrollY <= timing + display && (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: track }}
        />
      )}
    </>
  );
};
