import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { PositionProps } from 'helpers';
import { Image, ImageContainer } from './styled/image';

interface Props extends PositionProps {
  src: string;
  alt?: string;
}

const EventImage: FunctionComponent<Props> = (props) => {
  const { src, alt } = props;
  const imageRef = useRef(undefined);
  const [height, setHeight] = useState(undefined);

  const handleOnLoad = useCallback(() => {
    if (imageRef.current) {
      const { height: imageHeight } = imageRef.current.getBoundingClientRect();
      setHeight(imageHeight);
    }
  }, []);

  return (
    <ImageContainer height={height}>
      <Image
        ref={imageRef}
        onLoad={handleOnLoad}
        src={src}
        alt={alt}
      />
    </ImageContainer>
  );
};

export default EventImage;
