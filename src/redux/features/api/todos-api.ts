import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '@/src/models/todo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['getTodos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['getTodos']
    }),
    addTodo: builder.mutation<Todo, (Omit<Todo, 'id' | 'completed'>)>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['getTodos']
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
} = todosApi;

export default todosApi;