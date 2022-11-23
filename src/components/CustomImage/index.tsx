import React, { Suspense } from 'react';
import images from '../../assets/images/index';

export interface ImageProps {
  width: string;
  className: string;
  height: string;
  loading: string;
}
export interface C_Image {
  placeHolderSrc?: string;
  src?: string;
  props?: ImageProps;
}

const myFallBack = <img src={images.clothes_rack_blur} alt="clothes rack" />;
const CustomImage = ({ placeHolderSrc, src, ...props }: C_Image) => {
  return (
    <Suspense fallback={myFallBack}>{/** TODO: create custom image*/}</Suspense>
  );
};

export default CustomImage;
