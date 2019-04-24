import { jsonRequest } from './jsonRequest';
import authHeader from './authHeader';

const getAll = async () => jsonRequest('http://localhost:3000/api/posts', {
  headers: authHeader(),
});

const getById = async id => jsonRequest(`http://localhost:3000/api/posts/${id}`, {
  headers: authHeader(),
});
const createPost = async data => jsonRequest('http://localhost:3000/api/posts/', {
  headers: authHeader(),
  method: 'POST',
  body: JSON.stringify(data),
});

export { getAll, getById, createPost };
