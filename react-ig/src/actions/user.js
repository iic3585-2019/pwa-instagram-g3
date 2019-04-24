import { postConstants } from '../constants';

const request = constant => ({
  type: constant,
});

const reject = (err, constant) => ({
  type: constant,
  payload: err,
});

const success = (res, constant) => ({
  type: constant,
  payload: res,
});

const getAll = () => async (dispatch) => {
  dispatch(request(postConstants.POSTS_FETCH_ALL_REQUEST));
  const res = await postConstants.getAll();
  if (res.error) {
    dispatch(reject(res, postConstants.POSTS_FETCH_ALL_FAILURE));
  } else {
    dispatch(success(res, postConstants.POSTS_FETCH_ALL_SUCCESS));
  }
};

export default getAll;
