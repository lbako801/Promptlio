import { styled } from "@mui/material/styles";
import { Card } from "../../";
import isPropValid from "@emotion/is-prop-valid";

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(({ theme, isSelected }) => ({
  width: 300,
  transition: "all 0.1s ease-in",
  textAlign: "center",
  fontFamily: theme.typography.fontFamily.display,
  marginTop: theme.spacing(5),
  border: isSelected ? "4px solid green" : "",
  color: isSelected ? "green" : "",

  "&:hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
  },
}));

export { StyledCard };
