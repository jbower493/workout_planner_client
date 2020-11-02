import { SET_LOADING, UNSET_LOADING, SET_FETCHING, UNSET_FETCHING, SET_ALERT, CLEAR_ALERT } from '../actions/types';

const initialState = {
  loading: true,
  fetching: false,
  _alert: null
};

const utilReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case UNSET_FETCHING:
      return {
        ...state,
        fetching: false
      };
    case SET_ALERT:
      return {
        ...state,
        _alert: action.payload
      };
    case CLEAR_ALERT:
      return {
        ...state,
        _alert: null
      };
    default:
      return state;
  }
};

export default utilReducer;