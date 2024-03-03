import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';

const _getUsers = getUsers(fetch);
const _getPosts = getPosts(fetch);

export const context = () => {
  return {
    getUsers: _getUsers,
    getPosts: _getPosts,
  };
};
