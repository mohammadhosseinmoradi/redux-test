'use client'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import counterReducer from '@/src/redux/features/counter-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const StoreProvider = ({ children }: {
  children: ReactNode
}) => {

  return <Provider store={store}>
    {
      children
    }
  </Provider>;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;