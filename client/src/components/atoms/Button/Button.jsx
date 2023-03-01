import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.bg,
  fontFamily: theme.typography.fontFamily.display,
}));

export default StyledButton;
