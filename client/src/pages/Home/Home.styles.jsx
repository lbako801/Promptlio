import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.textMain,
  fontFamily: theme.typography.fontFamily.display,
}));

export { Root };
