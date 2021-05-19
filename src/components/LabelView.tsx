import React, { useCallback } from "react";
import clsx from "clsx";

type Props = {
  classes: {
    label: string;
    active: string;
  };
  buttonLabel?: string;
  timing: {
    start: number;
    end: number;
  };
  active: boolean;
  navigationDisplayTiming?: number;
};

export const LabelView: React.FC<Props> = ({
  classes,
  buttonLabel,
  timing,
  active,
  navigationDisplayTiming,
}) => {
  const handleClick = useCallback(() => {
    return scrollTo({ top: timing.start, left: 0, behavior: "smooth" });
  }, [timing]);

  return (
    <>
      {buttonLabel && (
        <input
          type="button"
          style={
            window.scrollY < navigationDisplayTiming && { display: "none" }
          }
          className={clsx(classes.label, {
            [classes.active]: active,
          })}
          value={buttonLabel}
          onClick={handleClick}
        />
      )}
    </>
  );
};
