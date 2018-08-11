import { combineReducers } from 'redux';

import { catReducer } from './catReducer';

export const Reducers = combineReducers({
  catsState: catReducer
});
