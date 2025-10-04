import reducer, { getNews } from './NewsSlice';

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
    expect(state.news[0].title).toEqual('test test');
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
