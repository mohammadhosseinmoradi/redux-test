'use client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import counterReducer from '@/src/redux/features/counter-slice';
import postsReducer from '@/src/redux/features/posts-slice';
import todosApi from '@/src/redux/features/api/todos-api';

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    counter: counterReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
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