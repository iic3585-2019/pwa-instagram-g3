import { postConstants } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case postConstants.POSTS_FETCH_ALL:
      return action.payload;
    default:
      return state;
  }
};
