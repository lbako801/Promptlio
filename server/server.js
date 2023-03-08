const express = require("express");
const dbConnection = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const seedUsers = require("./seeds.js");
const { authMiddleware } = require("./utils/auth");

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  dbConnection.once("open", () => {
    // seedUsers();
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
