import React, { useState } from 'react';
import { Comment } from '../../types/Comment';

interface CommentProps {
  comment: Comment;
}

const SingleComment = ({
  comment: {
    user: { name: username },
    comment,
    replies
  }
}: CommentProps): JSX.Element => {
  const [hidden, setHidden] = useState(true);

  const nestedComments = (replies || []).map((reply) => {
    return <SingleComment key={reply.id} comment={reply} />;
  });

  const handleClick = () => {
    setHidden((s) => !s);
  };

  return (
    <div className='comment'>
      <p>{comment}</p>
      <span>{username}</span>
      {replies.length && (
        <div onClick={() => handleClick()}>View {replies.length} Replies</div>
      )}
      {!hidden && nestedComments}
    </div>
  );
};

export default SingleComment;
