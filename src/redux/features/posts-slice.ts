import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from '@/src/redux/app/store';

const initialState : {
  posts: {
    title: string,
    body: string
  }[],
  status: '' | 'loading' | 'succeeded' | 'failed',
  error: any
} = {
  posts: [],
  status: '',
  error: null
}

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  } catch (error) {
    return (error as Error).message;
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading';
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts.push(action.payload);
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const actions = { ...postsSlice.actions, fetchPosts };

export const selects = {
  posts: (state: RootState) => {
    return state.posts.posts;
  },
  status: (state: RootState) => {
    return state.posts.status;
  },
  error: (state: RootState) => {
    return state.posts.error;
  }
}

export default postsSlice.reducer;