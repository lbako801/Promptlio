import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Card } from "../../../components";

const StyledPostCard = styled(Card)(({ theme }) => ({
  width: 300,
  marginBottom: theme.spacing(2),
}));

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

const Prompt = styled(Box)(({ theme }) => ({
  textAlign: "center",
  lineHeight: 1.3,
  marginBottom: theme.spacing(1)
}));

const Caption = styled(Box)(({ theme }) => ({
  textAlign: "center",
  fontFamily: theme.typography.fontFamily.text
}));

export { CreatorInfo, CreatorName, CreatedAt, Prompt, Caption, StyledPostCard };
