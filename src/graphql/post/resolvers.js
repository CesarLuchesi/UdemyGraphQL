const post = () => {
  return {
    id: '1',
    title: 'post title 1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'tipost title 1',
    },
    {
      id: '2',
      title: 'post title 2',
    },
    {
      id: '3',
      title: 'post title 3',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
