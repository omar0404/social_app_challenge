import {Comment, Post} from '../types';
import {API_URL} from '../utils/const';
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

export const postsService = createApi({
  reducerPath: 'postsService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const posts = await fetchWithBQ('posts');
        if (posts.error) {
          return {error: posts.error as FetchBaseQueryError};
        }

        const postsWithUser = (posts.data as Post[]).map(post => {
          return new Promise(async resolve => {
            const user = await fetchWithBQ(`users/${post.user_id}`);
            resolve({...post, user: user.data ?? {}});
          });
        });

        try {
          const result = await Promise.all(postsWithUser);
          return {data: result as Post[]};
        } catch (error) {
          return {
            error: error as FetchBaseQueryError,
          };
        }
      },
    }),

    getComments: builder.query<Comment[], number>({
      query: (id: number) => `posts/${id}/comments`,
    }),
  }),
});

export const {useGetPostsQuery, useGetCommentsQuery} = postsService;
