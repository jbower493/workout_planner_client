import { HIDE_MODAL, SHOW_MODAL_NEW, SHOW_DELETE_MODAL, SHOW_ADD_TO_WORKOUT, SHOW_EDIT_WORKOUT, SHOW_EDIT_WORKOUT_EXERCISE, SHOW_EDIT_EXERCISE, VIEW_WORKOUT, BACK_TO_DASHBOARD, DISPLAY_EXERCISES, DISPLAY_WORKOUTS } from './types';

import { setDeletableExerciseAC, setDeletableWorkoutAC, setWorkoutToAddToAC, setWorkoutToEditAC, setWorkoutExerciseToEditAC, setExerciseToEditAC, setWorkoutToViewAC, resetWorkoutToViewAC, resetAllDetailsAC, resetWorkoutExerciseToEditAC } from './detailsActions.js';
import { clearAlertAC } from './utilActions';

export const hideModalAC = () => {
  return { type: HIDE_MODAL }
};

const showModalNewAC = modalName => {
  return {
    type: SHOW_MODAL_NEW,
    payload: modalName
  }
};

const showDeleteModalAC = () => {
  return { type: SHOW_DELETE_MODAL }
};

const showAddToWorkoutAC = () => {
  return { type: SHOW_ADD_TO_WORKOUT }
};

const showEditWorkoutAC = () => {
  return { type: SHOW_EDIT_WORKOUT }
};

const showEditWorkoutExerciseAC = () => {
  return { type: SHOW_EDIT_WORKOUT_EXERCISE }
};

const showEditExerciseAC = () => {
  return { type: SHOW_EDIT_EXERCISE }
};

const viewWorkoutAC = () => {
  return { type: VIEW_WORKOUT }
};

const backToDashboardAC = () => {
  return { type: BACK_TO_DASHBOARD }
};

const displayWorkoutsAC = () => {
  return { type: DISPLAY_WORKOUTS }
};

const displayExercisesAC = () => {
  return { type: DISPLAY_EXERCISES }
};


export const hideModalNew = () => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(hideModalAC());
  };
};

export const showModalNew = modalName => {
  return dispatch => {
    dispatch(showModalNewAC(modalName))
  };
};

export const showDeleteModal = (deleteWhat, idToDel) => {
  return dispatch => {
    if(deleteWhat === 'exercise') {
      dispatch(setDeletableExerciseAC(idToDel));
    } else {
      dispatch(setDeletableWorkoutAC(idToDel));
    }
    dispatch(showDeleteModalAC());
  };
};

export const showAddToWorkout = (workoutId) => {
  return dispatch => {
    dispatch(setWorkoutToAddToAC(workoutId));
    dispatch(showAddToWorkoutAC());
  };
};

export const showEditWorkout = (workout) => {
  return dispatch => {
    dispatch(setWorkoutToEditAC(workout));
    dispatch(showEditWorkoutAC());
  }
};

export const showEditWorkoutExercise = (workoutExercise) => {
  return dispatch => {
    dispatch(setWorkoutExerciseToEditAC(workoutExercise));// needs to have all properties
    dispatch(showEditWorkoutExerciseAC());
  };
};

export const showEditExercise = (exercise) => {
  return dispatch => {
    dispatch(setExerciseToEditAC(exercise));
    dispatch(showEditExerciseAC());
  };
};

export const viewWorkout = (workout) => {
  return dispatch => {
    dispatch(setWorkoutToViewAC(workout));
    dispatch(viewWorkoutAC());
  };
};

export const backToDashboard = () => {
  return dispatch => {
    dispatch(backToDashboardAC());
    dispatch(resetWorkoutToViewAC());
  };
};

export const displayWorkouts = () => {
  return dispatch => {
    dispatch(displayWorkoutsAC());
  };
};

export const displayExercises = () => {
  return dispatch => {
    dispatch(displayExercisesAC());
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(hideModalAC());
    dispatch(resetAllDetailsAC());
  };
};

export const closeEditWorkoutModal = () => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(hideModalAC());
    
  };
};

export const closeEditWorkoutExerciseModal = () => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(hideModalAC());
    dispatch(resetWorkoutExerciseToEditAC());
  }
};  