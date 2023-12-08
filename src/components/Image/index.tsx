import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

const Image: FC<ImageProps> = (props) => {
  const imageStyle = {
    // width: '30%',
    height: props.height || '100%',
    borderRadius: 10,
    border: '1px solid #fff'
    // objectFit: 'contain'
  };
  return <NextImage {...props} style={imageStyle} />;
};

export default Image;
