import React from "react";

const imageView = (props) => {
  return (
    <div>
      <img src={props.image} height="100%" width="100%" />
    </div>
  );
};

export default imageView;
