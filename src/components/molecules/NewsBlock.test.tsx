import { configureStore } from '@reduxjs/toolkit';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';

import { NewsBlock } from '@/components/molecules/NewsBlock';

import newsReducer from '~/redux/NewsSlice';

const server = setupServer(
  rest.get('https://plusdesign.microcms.io/api/v1/news', (_req, res, ctx) => {
    // statusと実際返されるjsonを指定できる
    return res(
      ctx.status(200),
      ctx.json({
        contents: [
          {
            category: {},
            content: 'test',
            createdAt: 'test',
            updatedAt: 'test',
            publishedAt: 'test',
            revisedAt: 'test',
            id: 'test',
            title: 'test',
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

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
