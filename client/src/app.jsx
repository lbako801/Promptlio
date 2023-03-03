// I made all components a .jsx instead of a .js file. This is so we can use the 'rafce' module and make it easier to get started for each component!
import React from "react";
import Nav from "./components/nav/nav";
import { Login, Signup } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/Promptlio";
import { ThemeProvider } from "@mui/material/styles";

const app = () => {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ThemeProvider>
      </Router>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Roboto&display=swap" />
    </div>
  );
};

export default app;
