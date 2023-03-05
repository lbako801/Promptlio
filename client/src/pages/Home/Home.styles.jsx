import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.textMain,
  fontFamily: theme.typography.fontFamily.display,
}));

export { Root };
