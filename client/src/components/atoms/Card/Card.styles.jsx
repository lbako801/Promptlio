import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  padding: theme.spacing(3),
  border: "2px solid gray",
  borderRadius: 10,
  backgroundColor: theme.palette.primary.bgAlt,
}));

export default StyledCard;
