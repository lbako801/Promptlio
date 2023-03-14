// I made all components a .jsx instead of a .js file. This is so we can use the 'rafce' module and make it easier to get started for each component!
import React from "react";
import { Header } from "./components";
import { Login, Signup, Home, ChoosePrompt, CreatePost } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/Promptlio";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink();

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("user-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Apollo-Require-Preflight": "true",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

const app = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <ThemeProvider theme={theme}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/choose-prompt" element={<ChoosePrompt />} />
              <Route exact path="/create-post" element={<CreatePost />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </ApolloProvider>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Roboto&display=swap" />
    </>
  );
};

export default app;
