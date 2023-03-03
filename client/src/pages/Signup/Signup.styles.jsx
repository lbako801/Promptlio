import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const SignupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.textMain,
  fontFamily: theme.typography.fontFamily.display,
}));

const SignupCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  padding: theme.spacing(3),
  border: "2px solid gray",
  borderRadius: 10,
  backgroundColor: theme.palette.primary.bgAlt,
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export { SignupContainer, SignupCard, Form };
