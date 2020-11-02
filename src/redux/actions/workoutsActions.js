import { GET_WORKOUTS, NEW_WORKOUT, EDIT_WORKOUT, DELETE_WORKOUT, ADD_TO_WORKOUT, EDIT_WORKOUT_EXERCISE, REMOVE_WORKOUT_EXERCISE } from './types.js';

import { hideModalAC } from './displayActions';
import { setWorkoutToViewAC } from './detailsActions';
import { setFetchingAC, unsetFetchingAC, setAlertAC, clearAlertAC } from './utilActions';

import Axios from 'axios';
import { url } from '../../App.js';

const getWorkoutsAC = (workouts) => {
  return {
    type: GET_WORKOUTS,
    payload: workouts
  }
};

const newWorkoutAC = (workouts) => {
  return {
    type: NEW_WORKOUT,
    payload: workouts
  }
};

const editWorkoutAC = (workouts) => {
  return {
    type: EDIT_WORKOUT,
    payload: workouts
  }
};

const deleteWorkoutAC = (workouts) => {
  return {
    type: DELETE_WORKOUT,
    payload: workouts
  }
};

const addToWorkoutAC = (workouts) => {
  return {
    type: ADD_TO_WORKOUT,
    payload: workouts
  }
};

const editWorkoutExerciseAC = (workouts) => {
  return {
    type: EDIT_WORKOUT_EXERCISE,
    payload: workouts
  }
};

const removeWorkoutExerciseAC = (workouts) => {
  return {
    type: REMOVE_WORKOUT_EXERCISE,
    payload: workouts
  }
};


export const getWorkouts = () => {
  return dispatch => {
    
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-workouts`
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(getWorkoutsAC(newWorkouts));
          
        }
        
      })
      .catch(e => {
        console.log(e);
        dispatch(getWorkoutsAC([]));
        // show error page
      })
  };
};

export const newWorkout = (name, duration, type) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      url: `${url}/new-workout`,
      withCredentials: true,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(newWorkoutAC(newWorkouts));
          dispatch(hideModalAC());
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
        // show error page
      })
  };
};

export const editWorkout = (id, name, duration, type) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout/${id}`,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(editWorkoutAC(newWorkouts));
          dispatch(hideModalAC());

          const currentWorkout = newWorkouts.find(workout => workout._id === id);
          dispatch(setWorkoutToViewAC(currentWorkout));
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

export const deleteWorkout = (id) => {
  return dispatch => {
    dispatch(setFetchingAC());
    Axios({
      method: 'DELETE',
      url: `${url}/workout/${id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(deleteWorkoutAC(newWorkouts));
          dispatch(hideModalAC());
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetFetchingAC());
        
      })
  };
};

export const addToWorkout = (exercise, workoutId) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      url: `${url}/add-to-workout/${workoutId}`,
      withCredentials: true,
      data: exercise
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(addToWorkoutAC(newWorkouts));
          dispatch(hideModalAC());
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

export const editWorkoutExercise = (reps, sets, weight, workoutId, workoutExerciseId) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout-exercise/${workoutId}/${workoutExerciseId}`,
      data: {
        reps,
        sets,
        weight
      }
    })
      .then(res => {
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(editWorkoutExerciseAC(newWorkouts));
          dispatch(hideModalAC());

          const currentWorkout = newWorkouts.find(workout => workout._id === workoutId);
          dispatch(setWorkoutToViewAC(currentWorkout));
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

export const removeWorkoutExercise = (workoutId, workoutExerciseId, callback) => {
  return dispatch => {
    
    Axios({
      method: 'DELETE',
      url: `${url}/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
        callback(false);
        if(res.data.success) {
          const newWorkouts = [...res.data.workouts];
          dispatch(removeWorkoutExerciseAC(newWorkouts));
          
        }
        
      })
      .catch(e => {
        console.log(e);
        
        
      })
  };
};