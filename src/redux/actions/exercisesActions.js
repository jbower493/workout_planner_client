import { REQUESTING_EXERCISES_DATA, RECEIVED_EXERCISES_DATA, GET_EXERCISES, NEW_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from './types';
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

const newExerciseAC = () => {
  return { type: NEW_EXERCISE }
};

const editExerciseAC = () => {
  return { type: EDIT_EXERCISE }
};

const deleteExerciseAC = () => {
  return { type: DELETE_EXERCISE }
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

export const newExercise = (name, description, muscleGroup) => {
  return (dispatch) => {
    dispatch(requestingExercisesDataAC());
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
          //this.setState({ modal: false });
          //this.resetState()
          dispatch(newExerciseAC());
        }
        dispatch(receivedExercisesDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedExercisesDataAC());
      })
  };
};

export const editExercise = (id, name, description, muscleGroup) => {
  return dispatch => {
    dispatch(requestingExercisesDataAC());
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
        /*this.setState({
          modal: false,
          exerciseToEdit: null
        });
        this.resetState();*/
        dispatch(editExerciseAC());
        dispatch(receivedExercisesDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedExercisesDataAC());
      })
  };
};

export const deleteExercise = (id) => {
  return dispatch => {
    dispatch(requestingExercisesDataAC());
    Axios({
      method: 'DELETE',
      url: `${url}/exercise/${id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          /*this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.resetState();*/
          dispatch(deleteExerciseAC());
        }
        dispatch(receivedExercisesDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedExercisesDataAC());
      })
  };
};