import React, { useEffect, useState } from 'react';
import fetchComments from '../../services/api';
import { Comment } from '../../types/Comment';
import SingleComment from './Comment';

const CommentsContainer = (): JSX.Element => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    async function getData() {
      const { data } = await fetchComments();
      setComments(data);
    }

    getData();
  }, []);

  return comments ? (
    <div className='comments'>
      {comments.map((comment) => {
        return <SingleComment comment={comment} key={comment.id} />;
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default CommentsContainer;
