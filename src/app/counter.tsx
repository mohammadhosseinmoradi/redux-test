'use client';

import { useAppSelector, useAppDispatch } from '@/src/redux/app/hooks';
import { actions, selects } from '@/src/redux/features/counter-slice';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selects.count);

  return <div className='flex gap-12 flex-col justify-center items-center p-12'>
    {
      count
    }

    <div className='flex gap-6 items-center'>
      <button
        onClick={() => {
          dispatch(actions.increment(1));
        }}
        className='bg-blue-500 text-white rounded-xl px-6 py-2'
      >
        Add
      </button>
    </div>
  </div>;
}