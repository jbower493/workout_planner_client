import { GET_EXERCISES, NEW_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from './types';
import Axios from 'axios';

import { url } from '../../App';

import { hideModalAC } from './displayActions.js';
import { setFetchingAC, unsetFetchingAC, setAlertAC } from './utilActions';

const getExercisesAC = (exercises) => {
  return {
    type: GET_EXERCISES,
    payload: exercises
  }
};

const newExerciseAC = (exercises) => {
  return {
    type: NEW_EXERCISE,
    payload: exercises
  }
};

const editExerciseAC = (exercises) => {
  return {
    type: EDIT_EXERCISE,
    payload: exercises
  }
};

const deleteExerciseAC = (exercises) => {
  return {
    type: DELETE_EXERCISE,
    payload: exercises
  }
};


export const getExercises = () => {
  return (dispatch) => {
    
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-exercises`
    })
      .then(res => {
        if(res.data.success) {
          const newExercises = [...res.data.exercises];
          dispatch(getExercisesAC(newExercises));
          
        }
        
      })
      .catch(e => {
        console.log(e);
        dispatch(getExercisesAC([]));
        
      })
  };
};

export const newExercise = (name, description, muscleGroup) => {
  return (dispatch) => {
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      url: `${url}/new-exercise`,
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        if(res.data.success) {
          
          const newExercises = [...res.data.exercises];
          dispatch(newExerciseAC(newExercises));
          dispatch(hideModalAC())
        } else {
          const _alert = {
            type: 'warning',
            message: res.data.error
          };
          dispatch(setAlertAC(_alert));
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetFetchingAC());
        
      })
  };
};

export const editExercise = (id, name, description, muscleGroup) => {
  return dispatch => {
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      url: `${url}/edit-exercise/${id}`,
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        if(res.data.success) {
          const newExercises = [...res.data.exercises];
          dispatch(editExerciseAC(newExercises));
          dispatch(hideModalAC())
        } else {
          const _alert = {
            type: 'warning',
            message: res.data.error
          };
          dispatch(setAlertAC(_alert));
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetFetchingAC());
        
      })
  };
};

export const deleteExercise = (id) => {
  return dispatch => {
    dispatch(setFetchingAC());
    Axios({
      method: 'DELETE',
      url: `${url}/exercise/${id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          const newExercises = [...res.data.exercises];
          dispatch(deleteExerciseAC(newExercises));
          dispatch(hideModalAC())
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetFetchingAC());
        
      })
  };
};