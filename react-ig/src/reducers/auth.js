import { authConstants } from '../constants';

export default function reducer(
  state = {
    user: null,
    error: null,
    requesting: false,
  },
  action,
) {
  switch (action.type) {
    case authConstants.AUTH_REQUEST: {
      return { ...state, requesting: true };
    }

    case authConstants.AUTH_REQUEST_REJECTED: {
      return { ...state, requesting: false, error: action.payload };
    }

    case authConstants.AUTH_REQUEST_FULLFILED: {
      return { ...state, requesting: false, user: action.payload };
    }

    case authConstants.SIGNOUT_REQUEST: {
      return { ...state, requesting: true };
    }

    case authConstants.SIGNOUT_REQUEST_REJECTED: {
      return { ...state, requesting: false, error: action.payload };
    }

    case authConstants.SIGNOUT_REQUEST_FULLFILED: {
      return { ...state, user: null };
    }

    case authConstants.SIGNUP_REQUEST: {
      return { ...state, requesting: true };
    }

    case authConstants.SIGNUP_REQUEST_REJECTED: {
      return { ...state, requesting: false, error: action.payload };
    }

    case authConstants.SIGNUP_REQUEST_FULLFILED: {
      return { ...state, requesting: false, user: action.payload };
    }

    default:
      return { ...state };
  }
}
