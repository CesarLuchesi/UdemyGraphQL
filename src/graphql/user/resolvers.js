const users = async ({ fetch }) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

const user = async ({ id }, { fetch }) => {
  const response = await fetch('http://localhost:3000/users/' + id);
  const user = await response.json();
  return user;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
