import { GET_WORKOUTS, NEW_WORKOUT, EDIT_WORKOUT, DELETE_WORKOUT, ADD_TO_WORKOUT, EDIT_WORKOUT_EXERCISE, REMOVE_WORKOUT_EXERCISE } from '../actions/types.js';

const initialState = {
  workouts: []
};

const workoutsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_WORKOUTS:
    case NEW_WORKOUT:
    case EDIT_WORKOUT:
    case DELETE_WORKOUT:
    case ADD_TO_WORKOUT:
    case EDIT_WORKOUT_EXERCISE:
    case REMOVE_WORKOUT_EXERCISE:
      return {
        ...state,
        workouts: action.payload
      };
    default:
      return state;
  }
};

export default workoutsReducer;