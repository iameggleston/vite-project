import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Source = {
  id: string | null;
  name: string;
};

type ArticleList = Article[];

type Props = {
  articles: ArticleList | [];
  status: 'ok' | 'error';
  totalResults: number;
};

// redux-thunk
export const getNews = createAsyncThunk<ArticleList, void>(
  'news/getNews',
  async () => {
    // apiを叩く
    const res = await fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2025-09-06&sortBy=publishedAt&apiKey=1bd713e3c3034a7aade270be5fe9cc77'
    );
    const data = (await res.json()) as { articles: ArticleList };
    return data.articles;
  }
);

const initialState: Props = {
  articles: [],
  status: 'error',
  totalResults: 0,
};

// redux
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getNews.fulfilled,
        (state, action: PayloadAction<ArticleList>) => {
          state.articles = action.payload;
          state.status = 'ok';
        }
      )
      .addCase(getNews.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default newsSlice.reducer;
