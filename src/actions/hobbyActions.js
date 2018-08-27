import hobbyApi from 'api/hobbyApi';
import {
  FETCH_HOBBIES_BEGIN,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE
} from './';

const fetchHobbies = () => {
  return dispatch => {
    dispatch(fetchHobbiesBegin());
    return hobbyApi.getAllHobbies()
      .then(hobbies => dispatch(fetchHobbiesSuccess(hobbies)))
      .catch(error => dispatch(fetchHobbiesFailure(error)));
  };
};

const fetchHobbiesBegin = () => ({
  type: FETCH_HOBBIES_BEGIN
});

const fetchHobbiesSuccess = response => ({
  type: FETCH_HOBBIES_SUCCESS,
  payload: { hobbies: response }
});

const fetchHobbiesFailure = error => ({
  type: FETCH_HOBBIES_FAILURE,
  payload: { error }
});

export {
  fetchHobbies,
  fetchHobbiesBegin,
  fetchHobbiesSuccess,
  fetchHobbiesFailure
}
