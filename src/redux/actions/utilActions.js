import { SET_LOADING, UNSET_LOADING, SET_FETCHING, UNSET_FETCHING, SET_ALERT, CLEAR_ALERT } from './types';

export const setLoadingAC = () => {
  return { type: SET_LOADING }
};

export const unsetLoadingAC = () => {
  return { type: UNSET_LOADING }
};

export const setFetchingAC = () => {
  return { type: SET_FETCHING }
};

export const unsetFetchingAC = () => {
  return { type: UNSET_FETCHING }
};

export const setAlertAC = (_alert) => {
  return {
    type: SET_ALERT,
    payload: _alert
  }
};

export const clearAlertAC = () => {
  return { type: CLEAR_ALERT }
};


export const clearAlert = () => {
  return dispatch => {
    dispatch(clearAlertAC());
  };
};