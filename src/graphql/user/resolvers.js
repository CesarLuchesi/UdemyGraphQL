import fetch from 'node-fetch';

const users = async () => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

const user = async () => {
  return {
    id: '1',
    userName: 'César',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
