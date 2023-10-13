import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String
      age: Int
      average: Float
      married: Boolean
      arrayString: [String!]
    }
  `,
  resolvers: {
    Query: {
      id: () => '',
      name: () => 'César',
      age: () => 25,
      average: () => 50.55,
      married: () => false,
      arrayString: () => [],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
