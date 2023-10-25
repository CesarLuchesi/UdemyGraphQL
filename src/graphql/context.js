import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000/users';
export const context = () => {
  return {
    getUsers: (path = '/') => fetch(API_URL + '/' + path),
    getPosts: (path = '/') => fetch(API_URL + '/' + path),
  };
};
