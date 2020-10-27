import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exercisesReducer from './exercisesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  exercises: exercisesReducer
});

export default rootReducer;