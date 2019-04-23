import { postsConstants } from "../constants";

const request = constant => ({
  type: constant
});

const reject = (err, constant) => ({
  type: constant,
  payload: err
});

const success = (res, constant) => ({
  type: constant,
  payload: res
});

export const getAll = () => async dispatch => {
  dispatch(request(postsConstants.POSTS_FETCH_ALL_REQUEST));
  const res = await postsConstants.getAll();
  if (res.error) {
    dispatch(reject(res, postsConstants.POSTS_FETCH_ALL_FAILURE));
  } else {
    dispatch(success(res, postsConstants.POSTS_FETCH_ALL_SUCCESS));
  }
};
