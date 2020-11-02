import { SET_DELETABLE_EXERCISE, SET_DELETABLE_WORKOUT, SET_WORKOUT_TO_ADD_TO, SET_WORKOUT_TO_EDIT, SET_WORKOUT_EXERCISE_TO_EDIT, SET_EXERCISE_TO_EDIT, SET_WORKOUT_TO_VIEW, RESET_WORKOUT_TO_VIEW, RESET_ALL_DETAILS, RESET_WORKOUT_EXERCISE_TO_EDIT } from './types';

export const setDeletableExerciseAC = (exerciseId) => {
  return {
    type: SET_DELETABLE_EXERCISE,
    payload: exerciseId
  }
};

export const setDeletableWorkoutAC = (workoutId) => {
  return {
    type: SET_DELETABLE_WORKOUT,
    payload: workoutId
  }
};

export const setWorkoutToAddToAC = (workoutId) => {
  return {
    type: SET_WORKOUT_TO_ADD_TO,
    payload: workoutId
  }
};

export const setWorkoutToEditAC = (workoutId) => {
  return {
    type: SET_WORKOUT_TO_EDIT,
    payload: workoutId
  }
};

export const setWorkoutExerciseToEditAC = (workoutExercise) => {
  return {
    type: SET_WORKOUT_EXERCISE_TO_EDIT,
    payload: workoutExercise
  }
};

export const setExerciseToEditAC = (exercise) => {
  return {
    type: SET_EXERCISE_TO_EDIT,
    payload: exercise
  }
};

export const setWorkoutToViewAC = (workout) => {
  return {
    type: SET_WORKOUT_TO_VIEW,
    payload: workout
  }
};

export const resetWorkoutToViewAC = () => {
  return { type: RESET_WORKOUT_TO_VIEW }
};

export const resetAllDetailsAC = () => {
  return { type: RESET_ALL_DETAILS }
};

export const resetWorkoutExerciseToEditAC = () => {
  return { type: RESET_WORKOUT_EXERCISE_TO_EDIT }
};