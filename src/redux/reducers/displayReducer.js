import { HIDE_MODAL, SHOW_MODAL_NEW, SHOW_DELETE_MODAL, SHOW_ADD_TO_WORKOUT, SHOW_EDIT_WORKOUT, SHOW_EDIT_WORKOUT_EXERCISE, SHOW_EDIT_EXERCISE, VIEW_WORKOUT, BACK_TO_DASHBOARD, DISPLAY_WORKOUTS, DISPLAY_EXERCISES, CLOSE_MODAL } from '../actions/types.js';

const initialState = {
  modal: false,
  view: 'workouts'
};

const displayReducer = (state = initialState, action) => {
  switch(action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        modal: false
      };
    case SHOW_MODAL_NEW:
      return {
        ...state,
        modal: action.payload
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        modal: 'delete'
      };
    case SHOW_ADD_TO_WORKOUT:
      return {
        ...state,
        modal: 'add to workout'
      };
    case SHOW_EDIT_WORKOUT:
      return {
        ...state,
        modal: 'edit workout'
      };
    case SHOW_EDIT_WORKOUT_EXERCISE:
      return {
        ...state,
        modal: 'edit workout exercise'
      };
    case SHOW_EDIT_EXERCISE:
      return {
        ...state,
        modal: 'edit exercise'
      };
    case VIEW_WORKOUT:
      return {
        ...state,
        view: 'workout details'
      };
    case BACK_TO_DASHBOARD:
      return {
        ...state,
        view: 'workouts'
      };
    case DISPLAY_WORKOUTS:
      return {
        ...state,
        view: 'workouts'
      };
    case DISPLAY_EXERCISES:
      return {
        ...state,
        view: 'exercises'
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false
      };
    default: 
      return state;
  }
};

export default displayReducer;