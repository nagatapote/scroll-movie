import React from "react";

type Props = {
  buttonLabel?: string;
  timing: number;
  className?: string;
};

export const LabelView: React.FC<Props> = ({
  buttonLabel,
  className,
  timing,
}) => {
  const handleClick = () => {
    return scrollTo({ top: timing, left: 0, behavior: "smooth" });
  };

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
