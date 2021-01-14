import React, { FunctionComponent } from 'react';
import { Author, Card, Content, Image, Title } from './styled';

interface Props {
  image: string;
  title: string;
  author: string;
}

const SummaryCardV2: FunctionComponent<Props> = (props) => {
  const { title, author, image } = props;
  return (
    <Card>
      <Image src={image} alt="people baking" />
      <Content>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Content>
    </Card>
  );
};

export default SummaryCardV2;
