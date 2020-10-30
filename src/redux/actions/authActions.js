import { GET_USER, LOGIN, REGISTER, LOGOUT, /*REQUESTING_AUTH_DATA, RECEIVED_AUTH_DATA,*/ SHOW_REGISTER, SHOW_LOGIN } from './types';
import Axios from 'axios';

import { url } from '../../App';
/*
const requestingAuthDataAC = () => {
  return { type: REQUESTING_AUTH_DATA }
};

const receivedAuthDataAC = () => {
  return { type: RECEIVED_AUTH_DATA }
};*/

const showRegisterAC = () => {
  return { type: SHOW_REGISTER }
};

const showLoginAC = () => {
  return { type: SHOW_LOGIN }
};

const getUserAC = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
};

const loginAC = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
};

const registerAC = () => {
  return {
    type: REGISTER
  }
};

const logoutAC = () => {
  return {
    type: LOGOUT
  }
};

export const showRegister = () => {
  return (dispatch) => {
    dispatch(showRegisterAC());
  }
};

export const showLogin = () => {
  return (dispatch) => {
    dispatch(showLoginAC());
  }
};

export const getUser = () => {
  return (dispatch) => {
    
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        if(res.data.success) {
          dispatch(getUserAC(res.data.user));
        }
        
      })
      .catch(e => {
        console.log(e);
        dispatch(getUserAC(undefined));
        
      })
  };
};

export const login = (credentials) => {
  return dispatch => {
    
    Axios({
      method: 'post',
      url: `${url}/login`,
      withCredentials: true,
      data: credentials,
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        if(res.data.success) {
          dispatch(loginAC(res.data.user));
        }
        
      })
      .catch(e => {
        console.log(e);
        dispatch(loginAC(undefined));
        
      })
  }
};

export const register = (credentials) => {
  return dispatch => {
    
    Axios({
      method: 'post',
      url: `${url}/register`,
      withCredentials: true,
      data: credentials,
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        if(res.data.success) {
          dispatch(registerAC());
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  }
};

export const logout = () => {
  return dispatch => {
    
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/logout`
    })
      .then(res => {
        if(res.data.success) {
          dispatch(logoutAC());
        }
        
      })
      .catch(e => {
        console.log(e);
        
      })
  }
};