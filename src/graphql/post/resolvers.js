//Query resolvers
const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postAPi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postAPi.getPosts(input);
  return posts;
};

//Mutation resolvers
const createPost = (_, args, { dataSources }) => {
  console.log(args);
  return {
    id: '940',
    title:
      'Similique impedit consequatur qui ipsam sint quam rerum dolores distinctio.',
    body: 'Menor',
    userId: '502',
    indexRef: 18,
    createdAt: '2018-03-28T00:53:08.981Z',
  };
};

//Field resolver
const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userAPi.dataLoader.load(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost },
  Post: { user },
};
