import { postConstants } from '../constants';

export default (
  state = {
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case postConstants.POSTS_FETCH_ALL:
      return { ...state, data: [state.data, ...action.payload] };
    case postConstants.POST_SEND_REQUEST: {
      return { ...state, uploadingPost: true };
    }
    case postConstants.POSTS_SEND_REQUEST_FAILURE: {
      return { ...state, errorPosting: true, uploadingPost: false };
    }
    case postConstants.POSTS_SEND_REQUEST_SUCCESS: {
      return {
        ...state,
        errorPosting: true,
        uploadingPost: false,
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
};
