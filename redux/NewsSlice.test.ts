import reducer, { getNews } from './NewsSlice';

describe('extraReducers', () => {
  it('Should set articles from payload when fulfilled', () => {
    const initialState = {
      articles: [],
      status: 'error',
      totalResults: 0,
    };
    const action = {
      type: getNews.fulfilled.type,
      payload: [
        {
          source: { id: null, name: 'Example' },
          author: 'Author',
          title: 'test test',
          description: 'desc',
          url: 'https://example.com',
          urlToImage: 'https://example.com/img.jpg',
          publishedAt: '2025-10-06T00:00:00Z',
          content: 'content',
        },
      ],
    } as const;
    const state = reducer(initialState as any, action as any);
    expect(state.articles[0].title).toEqual('test test');
    expect(state.status).toEqual('ok');
  });

  it('Should set status to error when rejected', () => {
    const initialState = {
      articles: [],
      status: 'ok',
      totalResults: 0,
    };
    const action = {
      type: getNews.rejected.type,
    } as const;
    const state = reducer(initialState as any, action as any);
    expect(state.status).toEqual('error');
  });
});
