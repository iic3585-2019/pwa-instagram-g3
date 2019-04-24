import { jsonRequest } from './jsonRequest';
import authHeader from './authHeader';

export default {
  async getAll() {
    return jsonRequest('http://localhost:3000/posts', {
      headers: authHeader(),
    });
  },
  async getById(id) {
    return jsonRequest(`http://localhost:3000/posts/${id}`, {
      headers: authHeader(),
    });
  },
  async createPost(data) {
    return jsonRequest('http://localhost:3000/posts/', {
      headers: authHeader(),
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
