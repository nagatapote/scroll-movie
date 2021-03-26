import React from "react";

type Props = {
  className: string;
  image: string;
};

export const ImageView: React.FC<Props> = ({ className, image }) => {
  return <img src={image} className={className} />;
};
