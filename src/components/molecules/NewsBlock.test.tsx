import { configureStore } from '@reduxjs/toolkit';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
// We mock fetch directly instead of using MSW to avoid polyfill issues in Jest
import { Provider } from 'react-redux';

import { NewsBlock } from '@/components/molecules/NewsBlock';

import newsReducer from '~/redux/NewsSlice';
beforeEach(() => {
  // Mock global.fetch to return a successful News API-like response
  (global as any).fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      articles: [
        {
          source: { id: null, name: 'Example' },
          author: 'Author',
          title: 'test',
          description: 'desc',
          url: 'https://example.com',
          urlToImage: 'https://example.com/img.jpg',
          publishedAt: '2025-10-06T00:00:00Z',
          content: 'content',
        },
      ],
    }),
  });
});

afterEach(() => {
  // Reset mocks and cleanup DOM
  jest.resetAllMocks();
  cleanup();
});

describe('Redux Async API Mocking', () => {
  // test用のstoreを定義
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        news: newsReducer,
      },
    });
  });
  it('[Fetch success] Should display title', async () => {
    render(
      <Provider store={store}>
        <NewsBlock />
      </Provider>
    );
    expect(await screen.findByRole('link')).toHaveTextContent('test');
  });
});
