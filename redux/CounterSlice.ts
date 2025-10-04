import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './Store'

export const countSlice = createSlice({
  name: 'Counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value <= 0) return

      state.value -= 1
    }
  }
})

// コンポーネントからactionをdispatchできるようにexport
export const { increment, decrement } = countSlice.actions

// コンポーネントからstateを参照するための関数をexport
export const selectCount = (state: RootState) => state.counter.value

// Storeに登録するためにexport
export default countSlice.reducer