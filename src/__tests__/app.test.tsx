/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { act, render } from '@testing-library/react';
import App from '../App';
import fetchMock from 'jest-fetch-mock';
import commentsMockData from '../testData/commentsData.json';

describe('App Component', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify(commentsMockData));
  });
  it('should take a snapshot', async () => {
    let component: any = { asFragment: null };
    await act(async () => {
      component = render(<App />);
    });
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });
});
