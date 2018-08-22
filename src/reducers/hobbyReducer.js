import {
  FETCH_HOBBIES_BEGIN,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE
} from 'actions';
import initialState from './initialState';

export const hobbyReducer = (state = initialState.hobbies, action) => {
  switch(action.type) {
    case FETCH_HOBBIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_HOBBIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.hobbies
      }
    case FETCH_HOBBIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {}
      }
    default:
      return state;
  }
};
