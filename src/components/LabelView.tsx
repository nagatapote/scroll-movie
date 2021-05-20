import React, { useCallback } from "react";
import clsx from "clsx";

type Props = {
  classes: {
    label: string;
    active: string;
    before?: string;
    after?: string;
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
          className={clsx(
            classes.label,
            {
              [classes.active]: active,
            },
            window.scrollY < navigationDisplayTiming
              ? classes.before
              : classes.after
          )}
          value={buttonLabel}
          onClick={handleClick}
        />
      )}
    </>
  );
};
