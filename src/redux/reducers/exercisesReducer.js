import { GET_EXERCISES, NEW_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from '../actions/types';

const initialState = {
  exercises: []
};

const exercisesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EXERCISES:
    case NEW_EXERCISE:
    case EDIT_EXERCISE:
    case DELETE_EXERCISE:
      return {
        ...state,
        exercises: action.payload
      };
    default:
      return state;
  }
};

export default exercisesReducer;