import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const CreatorInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const CreatorName = styled(Box)(({ theme }) => ({
  fontSize: 10,
}));

const CreatedAt = styled(Box)(({ theme }) => ({
  fontSize: 10,
}));

export { CreatorInfo, CreatorName, CreatedAt };
