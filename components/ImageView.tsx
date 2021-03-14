import React from "react";

type Props = {
  image: string
  className?: string
}

export const ImageView: React.FC<Props> = ({
  image,
  className = 'scroll-moview__image-view',
}) => {
  return <img src={image} className={className} height="100%" width="100%" />;
};
