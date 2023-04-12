'use client';

import { useAddTodoMutation, useGetTodosQuery } from '@/src/redux/features/api/todos-api';
import { useAppSelector } from '@/src/redux/app/hooks';
import { useEffect, useState } from 'react';

export default function Todos() {
  const { data: todos = [] } = useGetTodosQuery();
  const [todo, setTodo] = useState<string>('');
  const [addTodo, { isLoading, isSuccess }] = useAddTodoMutation();

  const handleAddTodo = () => {
    addTodo({
      userId: 1,
      title: todo,
    });
  };

  useEffect(() => {

  }, []);

  return <div>
    {
      todos.map(todo => {
        return <div>
          {
            todo.title
          }
        </div>;
      })
    }

    <div>
      <input type='text' onChange={e => {
        setTodo(e.target.value);
      }} />
      <button onClick={handleAddTodo}>
        Add todo
        {
          isLoading ? 'Loading' : ''
        }
      </button>
    </div>
  </div>;
}