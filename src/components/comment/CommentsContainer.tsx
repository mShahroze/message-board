import React, { useEffect, useState } from 'react';
import fetchComments from '../../services/api';
import { CommentData, Comment } from '../../types/Comment';
import SingleComment from './Comment';

const CommentsContainer = (): JSX.Element => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    fetchComments().then(({ data }: CommentData) => {
      console.log(data);
      setComments(data);
    });
  }, []);

  return comments ? (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <SingleComment comment={comment} />
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default CommentsContainer;
