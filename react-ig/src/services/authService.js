import { jsonRequest } from './jsonRequest';

export default {
  async signIn(data) {
    return jsonRequest('http://localhost:3000/api/users/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async signOut() {
    return jsonRequest('http://localhost:3000/api/users/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  },

  async signUp(data) {
    return jsonRequest('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },
};
