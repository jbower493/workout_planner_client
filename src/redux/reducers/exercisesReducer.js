import { REQUESTING_EXERCISES_DATA, RECEIVED_EXERCISES_DATA, GET_EXERCISES } from '../actions/types';

const initialState = {
  exercises: [],
  loading: false
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
    default:
      return state;
  }
};

export default exercisesReducer;