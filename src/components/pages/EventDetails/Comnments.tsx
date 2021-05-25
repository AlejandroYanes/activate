import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Button } from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import TextArea from 'components/base-components/Inputs/TextArea';
import Modal from 'components/base-components/Modal';
import Comment from './Comment';
import { comments } from './data';
import { Footer } from './styled/comments';

const initialComment = {
  text: '',
};

const commentFactory = () => comments.map(
  ({ id, ...rest }) => <Comment key={id} {...rest} />,
);

const Comments: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(initialComment);
  const commentsList = useMemo(commentFactory, []);

  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <>
      {commentsList}
      <Footer>
        <Button
          label="See more"
          variant="flat"
          onClick={() => undefined}
        />
        <Button
          variant="flat"
          label="Leave your own"
          onClick={toggleModal}
        />
      </Footer>
      <Modal title="Leave your comment" onClose={toggleModal} visible={showModal}>
        <Form state={comment} onChange={setComment}>
          <Field name="text" component={TextArea} />
        </Form>
      </Modal>
    </>
  );
};

export default Comments;
