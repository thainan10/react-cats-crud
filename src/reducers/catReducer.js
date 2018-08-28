import {
  FETCH_CATS_BEGIN,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  UPDATE_CAT_BEGIN,
  UPDATE_CAT_SUCCESS,
  UPDATE_CAT_FAILURE
} from 'actions';
import initialState from './initialState';

export const catReducer = (state = initialState.cats, action) => {
  switch(action.type) {
    case FETCH_CATS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.cats
      };
    case FETCH_CATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {}
      };
    case UPDATE_CAT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UPDATE_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.filter(cat => cat.id !== action.payload.cat.id),
          Object.assign({}, action.payload.cat)
        ]
      };
    case UPDATE_CAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {}
      };
    default:
      return state;
  }
};
