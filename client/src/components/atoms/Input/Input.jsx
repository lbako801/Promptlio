import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),

  "& input": {
    backgroundColor: theme.palette.primary.bg,
    borderRadius: theme.borderRadius,
    color: theme.palette.primary.light,
  },

  "& label": {
    color: theme.palette.primary.textAlt,
  },

  "& fieldset": {
    borderRadius: theme.borderRadius,
  },
}));

export default StyledInput;
