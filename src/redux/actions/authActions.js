import { GET_USER, LOGIN, REGISTER, LOGOUT, SHOW_REGISTER, SHOW_LOGIN } from './types';
import Axios from 'axios';

import { setLoadingAC, unsetLoadingAC, setFetchingAC, unsetFetchingAC, setAlertAC, clearAlertAC } from './utilActions';

import { url } from '../../App';

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
    dispatch(clearAlertAC());
  }
};

export const showLogin = () => {
  return (dispatch) => {
    dispatch(clearAlertAC());
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
        dispatch(unsetLoadingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(getUserAC(undefined));
        dispatch(unsetLoadingAC());
      })
  };
};

export const login = (credentials) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
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
        } else {
          const _alert = {
            type: 'warning',
            message: res.data.error
          };
          dispatch(setAlertAC(_alert));
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(loginAC(undefined));
        dispatch(unsetFetchingAC());
        // show error page
      })
  }
};

export const register = (credentials) => {
  return dispatch => {
    dispatch(clearAlertAC());
    dispatch(setFetchingAC());
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
        } else {
          const _alert = {
            type: 'warning',
            message: res.data.error
          };
          dispatch(setAlertAC(_alert));
        }
        dispatch(unsetFetchingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetFetchingAC());
        // show error page
      })
  }
};

export const logout = () => {
  return dispatch => {
    dispatch(setLoadingAC());
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/logout`
    })
      .then(res => {
        if(res.data.success) {
          dispatch(logoutAC());
        }
        dispatch(unsetLoadingAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(unsetLoadingAC());
        // show error page
      })
  }
};