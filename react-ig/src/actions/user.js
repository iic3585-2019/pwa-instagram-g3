import { postConstants } from '../constants';
import { getAll, createPost } from '../services/postService';

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

const getAllPosts = () => async (dispatch) => {
  dispatch(request(postConstants.POSTS_FETCH_ALL_REQUEST));
  const res = await getAll();
  if (res.error) {
    dispatch(reject(res, postConstants.POSTS_FETCH_ALL_FAILURE));
  } else {
    dispatch(success(res, postConstants.POSTS_FETCH_ALL_SUCCESS));
  }
};

const sendPost = data => async (dispatch) => {
  dispatch(request(postConstants.POST_SEND_REQUEST));
  const res = await createPost(data);
  if (res.error) {
    dispatch(reject(res, postConstants.POSTS_SEND_REQUEST_FAILURE));
  } else {
    dispatch(success(res, postConstants.POSTS_SEND_REQUEST_SUCCESS));
  }
};

export { getAllPosts, sendPost };
