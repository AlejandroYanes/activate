import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Button, Field, FlexBox, Form, Modal, TextArea } from 'activate-components';
import { CommentModel } from 'models/comment';
import Comment from './Comment';

interface Props {
  comments: CommentModel[];
}

const initialComment = {
  text: '',
};

const commentFactory = (comments) => comments.map(
  (comment) => <Comment key={comment.id} comment={comment} />,
);

const Comments: FunctionComponent<Props> = (props) => {
  const { comments } = props;
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState(initialComment);
  const commentsList = useMemo(() =>commentFactory(comments), []);

  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <>
      {commentsList}
      <FlexBox justify="flex-end">
        <Button
          variant="flat"
          label="Leave your own"
          onClick={toggleModal}
        />
      </FlexBox>
      <Modal title="Leave your comment" onClose={toggleModal} visible={showModal}>
        <Form state={comment} onChange={setComment}>
          <Field name="text" component={TextArea} />
        </Form>
      </Modal>
    </>
  );
};

export default Comments;
