import {configureStore} from '@reduxjs/toolkit';
import reducers from '.';
import {postsService} from '../services/posts';
import {ErrorMiddleware} from './error-middleware';

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(postsService.middleware)
      .concat(ErrorMiddleware),
});
