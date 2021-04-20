import React, { FC } from 'react';
import './app.scss';
import CommentsContainer from './components/comment/CommentsContainer';

const App: FC = () => {
  return (
    <div className='main'>
      <header>
        <h1>Welcome to the Message Board!</h1>
      </header>

      <section>
        <h1>Top Comments</h1>
        <CommentsContainer />
      </section>
    </div>
  );
};

export default App;
