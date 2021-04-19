import React, { FC, useEffect, useState } from 'react';
import './app.scss';
import fetchComments from './services/api';
import { CommentData, Comment } from './types/Comment';

const App: FC = () => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    fetchComments().then(({ data }: CommentData) => {
      console.log(data);
      setComments(data);
    });
  }, []);

  return (
    <div className='main'>
      <header>
        <h1>Welcome to the Message Board!</h1>
      </header>

      <section>
        <h1>Comments</h1>
        {comments &&
          comments.map(({ id, comment, user: { name: username } }) => {
            return (
              <div className='comment' key={id}>
                <p>{comment}</p>
                <span>{username}</span>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default App;
