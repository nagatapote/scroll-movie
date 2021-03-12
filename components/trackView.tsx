import React from "react";

const trackView = (props) => {
  return <span id="track" dangerouslySetInnerHTML={{ __html: props.track }} />;
};

export default trackView;
