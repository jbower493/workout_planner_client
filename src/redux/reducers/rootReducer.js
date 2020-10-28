import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exercisesReducer from './exercisesReducer';
import workoutsReducer from './workoutsReducer';
import displayReducer from './displayReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  exercises: exercisesReducer,
  workouts: workoutsReducer,
  display: displayReducer,
  details: detailsReducer
});

export default rootReducer;