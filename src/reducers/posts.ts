import {createSlice} from '@reduxjs/toolkit';
import {getPosts, addPost, updatePost, deletePost} from '../actions/posts';
import {Post} from '../types';

const initialState: Post[] | [] = [];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      return [action.payload, ...state];
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      const updatedPost = action.payload;

      return state.map(post =>
        post.id === updatedPost.id ? updatedPost : post,
      );
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const id = action.payload;
      return state.filter(post => post.id !== id);
    });
  },
});

export default postsSlice.reducer;
