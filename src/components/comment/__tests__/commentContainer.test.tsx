/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { act, render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import commentsMockData from '../../../testData/commentsData.json';
import CommentsContainer from '../CommentsContainer';

describe('CommentContainer Component', () => {
  it('should take a snapshot', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(commentsMockData));
    let component: any;
    await act(async () => {
      component = render(<CommentsContainer />);
    });
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });
  it('No Data received', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }));
    let component: any;
    await act(async () => {
      component = render(<CommentsContainer />);
    });
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });
});
