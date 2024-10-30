const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { resolvers, typeDefs } = require("./schemas");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.listen({ port: 4000 }, () => {
  console.log(`Server running at http://localhost:4000/graphql`);
});
