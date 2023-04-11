import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/src/redux/app/store';

const initialState: {
  count: number
} = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: {
      payload: number
    }) => {
      state.count += action.payload;
    },
    decrement: (state, action: {
      payload: number
    }) => {
      state.count -= action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const selects = {
  count: (state: RootState) => {
    return state.counter.count;
  },
};

export default counterSlice.reducer;