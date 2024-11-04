const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { resolvers, typeDefs } = require("./schemas");

// const db = require("./config/connection.js");
const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
}

startServer();

// db.once("open", () => {
//   console.log("DB is live!");
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
  console.log(
    `The graphQL PLAYGROUND is at http://localhost:${PORT}${server.graphqlPath}`
  );
});
// });
