const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  return response.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
