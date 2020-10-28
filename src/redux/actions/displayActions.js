import { HIDE_MODAL, SHOW_MODAL_NEW, SHOW_DELETE_MODAL, SHOW_ADD_TO_WORKOUT, SHOW_EDIT_WORKOUT, SHOW_EDIT_WORKOUT_EXERCISE, SHOW_EDIT_EXERCISE, VIEW_WORKOUT, BACK_TO_DASHBOARD, DISPLAY_EXERCISES, DISPLAY_WORKOUTS, CLOSE_MODAL } from './types';

import { setDeletableExerciseAC, setDeletableWorkoutAC, setWorkoutToAddToAC, setWorkoutToEditAC, setWorkoutExerciseToEditAC, setExerciseToEditAC, setWorkoutToViewAC, resetWorkoutToViewAC, resetAllDetailsAC, resetWorkoutDetailDetailsAC } from './detailsActions.js';

const hideModalAC = () => {
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

const closeModalAC = () => {
  return { type: CLOSE_MODAL }
};


export const hideModalNew = () => {
  return dispatch => {
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

export const showEditWorkout = (workoutId) => {
  return dispatch => {
    dispatch(setWorkoutToEditAC(workoutId));
    dispatch(showEditWorkoutAC());
  }
};

export const showEditWorkoutExercise = (workoutExercise) => {
  return dispatch => {
    dispatch(setWorkoutExerciseToEditAC(workoutExercise));// needs to have workoutId and workoutExerciseId
    dispatch(showEditWorkoutExerciseAC());
  };
};

export const showEditExercise = (exerciseId) => {
  return dispatch => {
    dispatch(setExerciseToEditAC(exerciseId));
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
    dispatch(closeModalAC());
    dispatch(resetAllDetailsAC());
  };
};

export const closeWorkoutDetailsModal = () => {
  return dispatch => {
    dispatch(closeModalAC());
    dispatch(resetWorkoutDetailDetailsAC());
  };
};