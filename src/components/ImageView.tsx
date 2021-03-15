import React from "react";

type Props = {
  image: string;
  className: string;
};

export const ImageView: React.FC<Props> = ({ image, className }) => {
  return <img src={image} className={className} />;
};
