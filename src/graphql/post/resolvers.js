const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postAPi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postAPi.getPosts(input);
  return posts;
};

const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userAPi.dataLoader.load(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
