import catApi from 'api/catApi';
import {
  FETCH_CATS_BEGIN,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  UPDATE_CAT_BEGIN,
  UPDATE_CAT_SUCCESS,
  UPDATE_CAT_FAILURE
} from './';

const fetchCats = () => {
  return dispatch => {
    dispatch(fetchCatsBegin());
    return catApi.getAllCats()
      .then(cats => dispatch(fetchCatsSuccess(cats)))
      .catch(error => dispatch(fetchCatsFailure(error)));
  };
};

const updateCat = (cat) => {
  return dispatch => {
    dispatch(updateCatBegin());
    return catApi.updateCat(cat)
      .then(cat => dispatch(updateCatSuccess(cat)))
      .catch(error => dispatch(updateCatFailure(error)));
  };
};

const fetchCatsBegin = () => ({
  type: FETCH_CATS_BEGIN
});

const fetchCatsSuccess = response => ({
  type: FETCH_CATS_SUCCESS,
  payload: { cats: response }
});

const fetchCatsFailure = error => ({
  type: FETCH_CATS_FAILURE,
  payload: { error }
});

const updateCatBegin = () => ({
  type: UPDATE_CAT_BEGIN
});

const updateCatSuccess = response => ({
  type: UPDATE_CAT_SUCCESS,
  payload: { cat: response }
});

const updateCatFailure = error => ({
  type: UPDATE_CAT_FAILURE,
  payload: { error }
});

export {
  fetchCats,
  fetchCatsBegin,
  fetchCatsSuccess,
  fetchCatsFailure,
  updateCat,
  updateCatBegin,
  updateCatSuccess,
  updateCatFailure
}
