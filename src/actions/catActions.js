import catApi from 'api/catApi';
import {
  FETCH_PERSONS_BEGIN,
  FETCH_PERSONS_SUCCESS,
  FETCH_PERSONS_FAILURE
} from './';

const fetchCats = () => {
  return dispatch => {
    dispatch(fetchCatsBegin());
    return catApi.getAllCats()
    .then(cats => dispatch(fetchCatsSuccess(cats)))
    .catch(error => dispatch(fetchCatsFailure(error)));
  };
};

const fetchCatsBegin = () => ({
  type: FETCH_PERSONS_BEGIN
});

const fetchCatsSuccess = response => ({
  type: FETCH_PERSONS_SUCCESS,
  payload: { cats: response }
});

const fetchCatsFailure = error => ({
  type: FETCH_PERSONS_FAILURE,
  payload: { error }
});

export {
  fetchCats,
  fetchCatsBegin,
  fetchCatsSuccess,
  fetchCatsFailure
}
