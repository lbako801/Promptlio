import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";

const LoginContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.textMain,
  fontFamily: theme.typography.fontFamily.display,
}));

const LoginCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  padding: theme.spacing(3),
  border: "2px solid gray",
  borderRadius: 10,
  backgroundColor: theme.palette.primary.bgAlt,
}));

export { LoginContainer, LoginCard };
