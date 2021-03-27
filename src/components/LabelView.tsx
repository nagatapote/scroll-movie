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
};

export const LabelView: React.FC<Props> = ({
  classes,
  buttonLabel,
  timing,
  active,
}) => {
  const handleClick = useCallback(() => {
    return scrollTo({ top: timing.start, left: 0, behavior: "smooth" });
  }, [timing]);

  return (
    <>
      {buttonLabel && (
        <input
          type="button"
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
