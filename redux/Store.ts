import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import newsReducer from './NewsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// 型情報付きのuseSelectorをexport
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

// ストアからdispatchの型を抽出しています
export type AppDispatch = typeof store.dispatch;
