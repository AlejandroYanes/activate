import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageContainer, Image } from './styled/image';

interface Props {
  src: string;
  alt?: string;
}

const EventImage: FunctionComponent<Props> = (props) => {
  const imageRef = useRef(undefined);
  const [height, setHeight] = useState(undefined);

  const handleOnLoad = useCallback(() => {
    if (imageRef.current) {
      const { height: imageHeight } = imageRef.current.getBoundingClientRect();
      setHeight(imageHeight);
    }
  }, []);

  return (
    <Link to="/event-detail">
      <ImageContainer height={height}>
        <Image ref={imageRef} onLoad={handleOnLoad} {...props} />
      </ImageContainer>
    </Link>
  );
};

export default EventImage;
