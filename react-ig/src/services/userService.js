import { jsonRequest } from './jsonRequest';
import authHeader from './authHeader';

export default {
  async getAll() {
    return jsonRequest('http://localhost:3000/api/users', {
      headers: authHeader(),
    });
  },
  async getById(id) {
    return jsonRequest(`http://localhost:3000/api/users/${id}`, {
      headers: authHeader(),
    });
  },
  async getFollowing(userId) {
    return jsonRequest(`http://localhost:3000/api/users/${userId}/following`, {
      headers: authHeader(),
    });
  },
  async follow(userId) {
    return jsonRequest(`http://localhost:3000/api/users/${userId}/followers`, {
      headers: authHeader(),
      method: 'POST',
    });
  },
  async unfollow(userId) {
    return jsonRequest(`http://localhost:3000/api/users/${userId}/followers`, {
      headers: authHeader(),
      method: 'DELETE',
    });
  },
};
