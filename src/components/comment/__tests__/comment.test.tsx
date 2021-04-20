import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SingleComment from '../Comment';
import { Comment } from '../../../types/Comment';

describe('Comment Component', () => {
  it('should take a snapshot', () => {
    const comment: Comment = {
      id: '01',
      user: { id: '01', name: 'Sky' },
      comment: 'efwefuin fejefeo',
      replies: []
    };
    const { asFragment } = render(<SingleComment comment={comment} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Click on Reply displays more replies for comment', () => {
    const comment: Comment = {
      id: '01',
      user: { id: '01', name: 'Sky' },
      comment: 'Hello my friend!',
      replies: [
        {
          id: '01',
          user: { id: '03', name: 'Kevin' },
          comment: 'My favourite desert is Ice-cream',
          replies: []
        }
      ]
    };
    const { getByTestId } = render(<SingleComment comment={comment} />);
    const viewReply = getByTestId('01-comment');
    fireEvent.click(viewReply);
    const nestedComments = getByTestId('01-nested-comments');
    expect(nestedComments).toBeTruthy();
    expect(nestedComments.children.length).toBe(1);
  });
});
