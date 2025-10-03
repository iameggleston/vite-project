import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { client } from '~/libs/client';

type NewsItem = {
  category: object;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  id: string;
  title: string;
};

type DateType = NewsItem[];

type Props = {
  news: DateType | [];
  error: boolean;
};

export const getNews = createAsyncThunk<DateType, void>(
  'news/getNews',
  async () => {
    const data = await client.get<NewsItem>({ endpoint: 'news' });
    return data.contents as DateType;
  }
);

const initialState: Props = {
  news: [],
  error: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action: PayloadAction<DateType>) => {
        state.news = action.payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.error = true;
      });
  },
});

export default newsSlice.reducer;
