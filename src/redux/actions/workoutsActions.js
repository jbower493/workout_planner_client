import { REQUESTING_WORKOUTS_DATA, RECEIVED_WORKOUTS_DATA, GET_WORKOUTS, NEW_WORKOUT, EDIT_WORKOUT, DELETE_WORKOUT, ADD_TO_WORKOUT, EDIT_WORKOUT_EXERCISE, REMOVE_WORKOUT_EXERCISE } from './types.js';

import Axios from 'axios';
import { url } from '../../App.js';

const requestingWorkoutsDataAC = () => {
  return { type: REQUESTING_WORKOUTS_DATA }
};

const receivedWorkoutsDataAC = () => {
  return { type: RECEIVED_WORKOUTS_DATA }
};

const getWorkoutsAC = (workouts) => {
  return {
    type: GET_WORKOUTS,
    payload: workouts
  }
};

const newWorkoutAC = () => {
  return { type: NEW_WORKOUT }
};

const editWorkoutAC = () => {
  return { type: EDIT_WORKOUT }
};

const deleteWorkoutAC = () => {
  return { type: DELETE_WORKOUT }
};

const addToWorkoutAC = () => {
  return { type: ADD_TO_WORKOUT }
};

const editWorkoutExerciseAC = () => {
  return { type: EDIT_WORKOUT_EXERCISE }
};

const removeWorkoutExerciseAC = () => {
  return { type: REMOVE_WORKOUT_EXERCISE }
};


export const getWorkouts = () => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-workouts`
    })
      .then(res => {
        dispatch(getWorkoutsAC(res.data.workouts));
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(getWorkoutsAC([]));
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const newWorkout = (name, duration, type) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
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
          //this.setState({ modal: false });
          dispatch(newWorkoutAC());
        }
        //this.resetState()
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const editWorkout = (id, name, duration, type) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
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
          /*const id = this.state.workoutToEdit._id;
          this.setState({
            modal: false,
            workoutToEdit: null
          });
          this.resetState(id);*/
          dispatch(editWorkoutAC());
        }
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const deleteWorkout = (id) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
    Axios({
      method: 'DELETE',
      url: `${url}/workout/${id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          /*this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.resetState();*/
          dispatch(deleteWorkoutAC());
        }
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const addToWorkout = (exercise, workoutId) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
    Axios({
      method: 'POST',
      url: `${url}/add-to-workout/${workoutId}`,
      withCredentials: true,
      data: exercise
    })
      .then(res => {
        /*this.setState({
          modal: false,
          workoutToAddTo: null
        });
        this.resetState();*/
        dispatch(addToWorkoutAC());
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const editWorkoutExercise = (reps, sets, weight, workoutId, workoutExerciseId) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
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
          /*const id = this.state.workoutExerciseToEdit.workoutId;
          this.setState({
            modal: false,
            workoutExerciseToEdit: null
          });
          this.resetState(id);*/
          dispatch(editWorkoutExerciseAC());
        }
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};

export const removeWorkoutExercise = (workoutId, workoutExerciseId) => {
  return dispatch => {
    dispatch(requestingWorkoutsDataAC());
    Axios({
      method: 'DELETE',
      url: `${url}/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          //this.resetState();
          dispatch(removeWorkoutExerciseAC());
        }
        dispatch(receivedWorkoutsDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedWorkoutsDataAC());
      })
  };
};