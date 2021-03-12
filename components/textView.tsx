import React from "react";

const TextView = (props) => {
  const scrollValue = (props.maxImageLength / (props.length - 1)) * props.index;

  const scrollButton = () => {
    return scrollTo({ top: scrollValue, left: 0, behavior: "smooth" });
  };
  return (
    <input
      type="button"
      value={props.buttonText}
      onClick={() => scrollButton()}
    />
  );
};

export default TextView;
