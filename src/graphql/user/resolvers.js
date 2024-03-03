const users = async (_, { input }, { dataSources }) => {
  const users = dataSources.userAPi.getUsers(input);
  return users;
};

const user = async (_, { id }, { dataSources }) => {
  const user = dataSources.userAPi.getUser(id);
  return user;
};

const posts = async ({ id }, __, { dataSources }) => {
  return dataSources.postAPi.dataLoader.load(id);
};

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
