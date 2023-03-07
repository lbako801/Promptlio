import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Box)(({ theme }) => ({
  textAlign: "center",
  fontFamily: theme.typography.fontFamily.display,
  fontSize: 40,
}));

export { StyledTitle };
