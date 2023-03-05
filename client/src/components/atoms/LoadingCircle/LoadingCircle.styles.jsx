import { styled, Box } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const LoadingText = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.display,
  fontSize: 40,
}));

export { Root, LoadingText };
