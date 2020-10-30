import { REQUESTING_EXERCISES_DATA, RECEIVED_EXERCISES_DATA, GET_EXERCISES, NEW_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from '../actions/types';

const initialState = {
  exercises: [],
  loading: true
};

const exercisesReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_EXERCISES_DATA:
      return {
        ...state,
        loading: true
      };
    case RECEIVED_EXERCISES_DATA:
      return {
        ...state,
        loading: false
      };
    case GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload
      };
    case NEW_EXERCISE:
    case EDIT_EXERCISE:
    case DELETE_EXERCISE:
    default:
      return state;
  }
};

export default exercisesReducer;