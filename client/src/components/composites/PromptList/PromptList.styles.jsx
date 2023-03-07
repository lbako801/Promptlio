import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export { Root };
