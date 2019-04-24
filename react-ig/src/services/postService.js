import { jsonRequest } from './jsonRequest';
import authHeader from './authHeader';

const getAll = async () => jsonRequest('http://localhost:3000/posts', {
  headers: authHeader(),
});

const getById = async id => jsonRequest(`http://localhost:3000/posts/${id}`, {
  headers: authHeader(),
});
const createPost = async data => jsonRequest('http://localhost:3000/posts/', {
  headers: authHeader(),
  method: 'POST',
  body: JSON.stringify(data),
});

export { getAll, getById, createPost };
