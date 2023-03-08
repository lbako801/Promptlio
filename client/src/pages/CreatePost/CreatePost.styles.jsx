import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import isPropValid from "@emotion/is-prop-valid";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.textMain,
  fontFamily: theme.typography.fontFamily.display,
}));

const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  padding: theme.spacing(3),
  border: "2px solid gray",
  borderRadius: 10,
  backgroundColor: theme.palette.primary.bgAlt,
  maxWidth: 400
}));

const ActivePrompt = styled(Box)(({ theme }) => ({
  fontSize: 30,
  textAlign: 'center',
  lineHeight: 1.3,
  marginBottom: theme.spacing(2)
}));

export { Container, StyledCard, ActivePrompt };