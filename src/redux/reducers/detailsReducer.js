import { SET_DELETABLE_EXERCISE, SET_DELETABLE_WORKOUT, SET_WORKOUT_TO_ADD_TO, SET_WORKOUT_TO_EDIT, SET_WORKOUT_EXERCISE_TO_EDIT, SET_EXERCISE_TO_EDIT, SET_WORKOUT_TO_VIEW, RESET_WORKOUT_TO_VIEW, RESET_ALL_DETAILS, RESET_WORKOUT_EXERCISE_TO_EDIT } from '../actions/types.js';
// these initial state values need to be individually reset after their respective modals have been exited
const initialState = {
  deletableExerciseId: null,
  deletableWorkoutId: null,
  workoutToAddTo: null,
  workoutToEdit: null,
  workoutExerciseToEdit: null,
  exerciseToEdit: null,
  workoutToView: null
};

const detailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DELETABLE_EXERCISE:
      return {
        ...state,
        deletableExerciseId: action.payload
      };
    case SET_DELETABLE_WORKOUT:
      return {
        ...state,
        deletableWorkoutId: action.payload
      };
    case SET_WORKOUT_TO_ADD_TO:
      return {
        ...state,
        workoutToAddTo: action.payload
      };
    case SET_WORKOUT_TO_EDIT:
      return {
        ...state,
        workoutToEdit: action.payload
      };
    case SET_WORKOUT_EXERCISE_TO_EDIT:
      return {
        ...state,
        workoutExerciseToEdit: action.payload
      };
    case SET_EXERCISE_TO_EDIT:
      return {
        ...state,
        exerciseToEdit: action.payload
      };
    case SET_WORKOUT_TO_VIEW:
      return {
        ...state,
        workoutToView: action.payload
      };
    case RESET_WORKOUT_TO_VIEW:
      return {
        ...state,
        workoutToView: null
      };
    case RESET_ALL_DETAILS:
      return {
        ...state,
        deletableExerciseId: null,
        deletableWorkoutId: null,
        workoutToAddTo: null,
        exerciseToEdit: null
      }
    case RESET_WORKOUT_EXERCISE_TO_EDIT:
      return {
        ...state,
        workoutExerciseToEdit: null
      }
    default:
      return state;
  }
};

export default detailsReducer;