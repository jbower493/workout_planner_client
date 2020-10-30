import { GET_WORKOUTS, NEW_WORKOUT, EDIT_WORKOUT, DELETE_WORKOUT, ADD_TO_WORKOUT, EDIT_WORKOUT_EXERCISE, REMOVE_WORKOUT_EXERCISE } from './types.js';

import { hideModalAC } from './displayActions';
import { setWorkoutToViewAC } from './detailsActions';

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
        
      })
  };
};

export const newWorkout = (name, duration, type) => {
  return dispatch => {
    
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
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  };
};

export const editWorkout = (id, name, duration, type) => {
  return dispatch => {
    
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
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  };
};

export const deleteWorkout = (id) => {
  return dispatch => {
    
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
        
      })
      .catch(e => {
        console.log(e);
        
      })
  };
};

export const addToWorkout = (exercise, workoutId) => {
  return dispatch => {
    
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
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  };
};

export const editWorkoutExercise = (reps, sets, weight, workoutId, workoutExerciseId) => {
  return dispatch => {
    
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
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  };
};

export const removeWorkoutExercise = (workoutId, workoutExerciseId) => {
  return dispatch => {
    
    Axios({
      method: 'DELETE',
      url: `${url}/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
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