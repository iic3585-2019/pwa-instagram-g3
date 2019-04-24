import authService from '../services/authService';
import { authConstants } from '../constants';

const requestAuth = data => ({
  type: authConstants.AUTH_REQUEST,
  data,
});

const receiveResponse = (data, res) => ({
  type: authConstants.AUTH_REQUEST_FULLFILED,
  payload: res,
  data,
});

const signOutFullfiled = res => ({
  type: authConstants.SIGNOUT_REQUEST_FULLFILED,
  payload: res,
  res,
});

const requestSignOut = () => ({
  type: authConstants.SIGNOUT_REQUEST,
});

const rejectResponse = data => ({
  type: authConstants.AUTH_REQUEST_REJECTED,
  payload: data.error,
  data,
});

export const signOut = () => async (dispatch) => {
  dispatch(requestSignOut());
  dispatch(signOutFullfiled());
  localStorage.removeItem('user');
};

export const signIn = (data, history) => async (dispatch) => {
  dispatch(requestAuth(data));
  const res = await authService.signIn(data);

  if (res.error) {
    dispatch(rejectResponse(res));
  } else {
    dispatch(receiveResponse(data, res));
    localStorage.setItem('user', JSON.stringify(res));
    history.push('/');
  }
};

export const signUp = (data, history) => async (dispatch) => {
  const request = () => ({
    type: authConstants.SIGNUP_REQUEST,
  });

  const reject = err => ({
    type: authConstants.SIGNUP_REQUEST_REJECTED,
    payload: err,
  });

  const success = user => ({
    type: authConstants.SIGNUP_REQUEST_FULLFILED,
    payload: user,
  });

  dispatch(request());
  const res = await authService.signUp(data);
  if (res.error) {
    dispatch(reject(res));
  } else {
    dispatch(success(res));
    localStorage.setItem('user', JSON.stringify(res));
    history.push('/');
  }
};

export default { signIn, signOut, signUp };
