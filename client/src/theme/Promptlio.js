import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      bg: "#101113",
      bgAlt: "#1c1d21",
      main: "#e6ff00",
      light: "#f2f3f4",
      textAlt: "#464a53",
    },
  },
  typography: {
    fontFamily: {
      display: "Bungee",
      text: "Roboto",
    },
  },
  borderRadius: 15,
});

export default theme;
