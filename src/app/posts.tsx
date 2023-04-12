'use client';

import { useAppDispatch, useAppSelector } from '@/src/redux/app/hooks';
import { actions, selects } from '@/src/redux/features/posts-slice';
import { ReactNode, useEffect, useRef } from 'react';

export default function Posts() : ReactNode {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selects.posts);
  const status = useAppSelector(selects.status);
  const error = useAppSelector(selects.error);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current && status === '') {
      isMounted.current = true;
      dispatch(actions.fetchPosts());
    }
  }, []);

  switch (status) {
    case 'loading':
      return <div>
        Loading...
      </div>;
    case 'succeeded':
      return <div>
        {
          posts.map(post => {
            return <article key={post.id}>
              {
                post.title
              }
            </article>;
          })
        }
      </div>;
    case 'failed':
      return <div>
        Failed
      </div>;

    default:
      return <div>
        hi
      </div>;
  }
}