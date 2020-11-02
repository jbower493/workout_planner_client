import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exercisesReducer from './exercisesReducer';
import workoutsReducer from './workoutsReducer';
import displayReducer from './displayReducer';
import detailsReducer from './detailsReducer';
import utilReducer from './utilReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  exercises: exercisesReducer,
  workouts: workoutsReducer,
  display: displayReducer,
  details: detailsReducer,
  util: utilReducer
});

export default rootReducer;