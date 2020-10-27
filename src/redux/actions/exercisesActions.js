import { REQUESTING_EXERCISES_DATA, RECEIVED_EXERCISES_DATA, GET_EXERCISES} from './types';
import Axios from 'axios';

import { url } from '../../App';

const requestingExercisesDataAC = () => {
  return { type: REQUESTING_EXERCISES_DATA }
};

const receivedExercisesDataAC = () => {
  return { type: RECEIVED_EXERCISES_DATA }
};

const getExercisesAC = (exercises) => {
  return {
    type: GET_EXERCISES,
    payload: exercises
  }
};

export const getExercises = () => {
  return (dispatch) => {
    dispatch(requestingExercisesDataAC());
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-exercises`
    })
      .then(res => {
        dispatch(getExercisesAC(res.data.exercises));
        dispatch(receivedExercisesDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(getExercisesAC([]));
        dispatch(receivedExercisesDataAC());
      })
  };
};