const express = require("express");
const dbConnection = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const seedPromptData = require("./seeds/promptSeeds.js");
const { authMiddleware } = require("./utils/auth");
const path = require("path");

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  dbConnection.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
