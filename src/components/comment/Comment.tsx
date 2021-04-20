import React, { useState } from 'react';
import { Comment } from '../../types/Comment';

interface CommentProps {
  comment: Comment;
}

const SingleComment = ({
  comment: {
    id,
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
      <span>By {username}</span>
      {replies.length && (
        <div
          className='replies replies-dropdown'
          data-testid={`${id}-comment`}
          onClick={() => handleClick()}
        >
          View {replies.length} Replies
        </div>
      )}
      {!hidden && (
        <div data-testid={`${id}-nested-comments`}> {nestedComments} </div>
      )}
    </div>
  );
};

export default SingleComment;
