import React, { FunctionComponent } from 'react';
import faker from 'faker';
import { Description as StyledDescription } from './styled';

const description = faker.lorem.paragraphs(5);

const Description: FunctionComponent = () => (
  <StyledDescription>{description}</StyledDescription>
);

export default Description;
