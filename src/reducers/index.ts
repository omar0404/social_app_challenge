import {combineReducers} from 'redux';
import {postsService} from '../services/posts';

const reducers = combineReducers({
  [postsService.reducerPath]: postsService.reducer,
});
export default reducers;
