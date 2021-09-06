import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { CommentModel } from 'models/comment';
import { Button } from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import TextArea from 'components/base-components/Inputs/TextArea';
import Modal from 'components/base-components/Modal';
import Comment from './Comment';
import { Footer } from './styled/comments';

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
      <Footer>
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
