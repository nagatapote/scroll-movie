import React from "react";

const textView = (props) => {
  return (
    <div>
      <span id="track" dangerouslySetInnerHTML={{ __html: props.track }} />
    </div>
  );
};

export default textView;
