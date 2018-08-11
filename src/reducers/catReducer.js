import {
  FETCH_PERSONS_BEGIN,
  FETCH_PERSONS_SUCCESS,
  FETCH_PERSONS_FAILURE
} from 'actions';
import initialState from './initialState';

export const catReducer = (state = initialState.cats, action) => {
  switch(action.type) {
    case FETCH_PERSONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.cats
      };
    case FETCH_PERSONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state;
  }
};
