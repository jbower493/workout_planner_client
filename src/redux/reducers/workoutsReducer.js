import { REQUESTING_WORKOUTS_DATA, RECEIVED_WORKOUTS_DATA, GET_WORKOUTS, NEW_WORKOUT, EDIT_WORKOUT, DELETE_WORKOUT, ADD_TO_WORKOUT, EDIT_WORKOUT_EXERCISE, REMOVE_WORKOUT_EXERCISE } from '../actions/types.js';

const initialState = {
  workouts: [],
  loading: false
};

const workoutsReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_WORKOUTS_DATA:
      return {
        ...state,
        loading: true
      };
    case RECEIVED_WORKOUTS_DATA:
      return {
        ...state,
        loading: false
      };
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload
      };
    case NEW_WORKOUT:
    case EDIT_WORKOUT:
    case DELETE_WORKOUT:
    case ADD_TO_WORKOUT:
    case EDIT_WORKOUT_EXERCISE:
    case REMOVE_WORKOUT_EXERCISE:
    default:
      return state;
  }
};

export default workoutsReducer;