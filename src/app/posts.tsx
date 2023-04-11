'use client'

import { useAppDispatch, useAppSelector } from '@/src/redux/app/hooks';
import { actions, selects } from '@/src/redux/features/posts-slice';
import { useEffect } from 'react';

export default function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selects.posts);
  const status = useAppSelector(selects.status);
  const error = useAppSelector(selects.error);

  useEffect(() => {
    dispatch(actions.fetchPosts());
  }, []);

  switch (status) {
    case 'loading':
      return <div>
        Loading...
      </div>
    case 'succeeded':
      return  <div>
        Succeeded
      </div>
    case 'failed':
      return <div>
        Failed
      </div>

    default:
      return <div>
        hi
      </div>
  }
}