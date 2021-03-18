import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";

type Props = {
  buttonLabel?: string;
  active: boolean;
  classes: {
    label: string;
    active: string;
  }
  timing: {
    start: number;
    end: number;
  }
};

export const LabelView: React.FC<Props> = ({
  buttonLabel,
  classes,
  active,
  timing,
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
