import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'components/base-components/Form';
import TextArea from 'components/base-components/Inputs/TextArea';
import { Text } from 'components/base-components/Typography';

const initialComment = {
  text: '',
};

const Comments: FunctionComponent = () => {
  const [comment, setComment] = useState(initialComment);
  return (
    <>
      <Text mB>Leave a comment</Text>
      <Form state={comment} onChange={setComment}>
        <Field name="text" component={TextArea} />
      </Form>
    </>
  );
};

export default Comments;
