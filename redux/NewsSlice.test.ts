import { screen } from '@testing-library/react';

import reducer, { getNews } from 'redux/NewsSlice';

describe('extraReducers', () => {
  it('Should output news state + payload when fulfilled', () => {
    const initialState = {
      news: [],
      error: false,
    };
    const action = {
      type: getNews.fulfilled.type,
      payload: { title: 'test test' },
    };
    const state = reducer(initialState, action);
    expect(state.news.title).toEqual('test test');
  });
  it('Should output error state + payload when rejected', () => {
    const initialState = {
      news: [],
      error: false,
    };
    const action = {
      type: getNews.rejected.type,
    };
    const state = reducer(initialState, action);
    expect(state.error).toEqual(true);
  });
});

