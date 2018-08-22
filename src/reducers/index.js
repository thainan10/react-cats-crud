import { combineReducers } from 'redux';

import { catReducer } from './catReducer';
import { hobbyReducer } from './hobbyReducer';

export const Reducers = combineReducers({
  catsState: catReducer,
  hobbiesState: hobbyReducer
});
