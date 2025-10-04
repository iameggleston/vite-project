import reducer, { increment, decrement } from './CounterSlice';

describe('CounterSlice', () => {
  it('should increment the counter', () => {
    const initialState = { value: 0 };
    const state = reducer(initialState, increment());
    expect(state.value).toEqual(1);
  });

  it('should decrement the counter', () => {
    const initialState = { value: 1 };
    const state = reducer(initialState, decrement());
    expect(state.value).toEqual(0);
  });

  it('should not decrement the counter below 0', () => {
    const initialState = { value: 0 };
    const state = reducer(initialState, decrement());
    expect(state.value).toEqual(0);
  });
});
