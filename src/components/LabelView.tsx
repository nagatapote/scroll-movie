import React, { useState, useEffect, useCallback } from "react";

type Props = {
  buttonLabel?: { text: string; backColor: string };
  start: number;
  end: number;
  className: string;
};

export const LabelView: React.FC<Props> = ({
  buttonLabel,
  className,
  start,
  end,
}) => {
  const handleClick = useCallback(() => {
    return scrollTo({ top: start, left: 0, behavior: "smooth" });
  }, []);

  const [color, setColor] = useState("");

  useEffect(() => {
    if (buttonLabel && scrollY >= start && scrollY <= start + end) {
      setColor(`${buttonLabel.backColor}`);
    } else {
      setColor("");
    }
  });

  return (
    <>
      {buttonLabel && (
        <input
          type="button"
          style={{ backgroundColor: `${color}` }}
          className={className}
          value={buttonLabel.text}
          onClick={handleClick}
        />
      )}
    </>
  );
};
