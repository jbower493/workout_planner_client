import { GET_USER, LOGIN, REGISTER, LOGOUT, /*REQUESTING_AUTH_DATA, RECEIVED_AUTH_DATA,*/ SHOW_REGISTER, SHOW_LOGIN } from '../actions/types';

const initialState = {
  user: null,
  form: 'login'
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_REGISTER:
      return {
        ...state,
        form: 'register'
      };
    case SHOW_LOGIN:
      return {
        ...state,
        form: 'login'
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    case REGISTER:
      return {
        ...state,
        form: 'login'
      };
    default:
      return state;
  }
};

export default authReducer;