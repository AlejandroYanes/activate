import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, ImageContainer } from './styled/image';
import { Layout, useAppLayout } from '../../providers/Layout';

interface Props {
  src: string;
  alt?: string;
}

const EventImage: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const imageRef = useRef(undefined);
  const [height, setHeight] = useState(undefined);

  const handleOnLoad = useCallback(() => {
    if (imageRef.current) {
      const { height: imageHeight } = imageRef.current.getBoundingClientRect();
      setHeight(imageHeight);
    }
  }, []);

  const link = layout !== Layout.SMALL ? '/event-details' : '#event-details';

  return (
    <Link to={link}>
      <ImageContainer height={height}>
        <Image ref={imageRef} onLoad={handleOnLoad} {...props} />
      </ImageContainer>
    </Link>
  );
};

export default EventImage;
