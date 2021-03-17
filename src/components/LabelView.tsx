import React, { useCallback } from "react";

type Props = {
  buttonLabel?: string;
  start: number;
  className: string;
};

export const LabelView: React.FC<Props> = ({
  buttonLabel,
  className,
  start,
}) => {
  const handleClick = useCallback(() => {
    return scrollTo({ top: start, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {buttonLabel && (
        <input
          type="button"
          className={className}
          value={buttonLabel}
          onClick={handleClick}
        />
      )}
    </>
  );
};
