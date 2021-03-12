import React from "react";

const TrackView = (props) => {
  return <span id="track" dangerouslySetInnerHTML={{ __html: props.track }} />;
};

export default TrackView;
