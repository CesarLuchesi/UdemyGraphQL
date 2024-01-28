import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getPosts } from './post/utils';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
