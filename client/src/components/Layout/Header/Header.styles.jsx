import { styled, Box, Tooltip } from "@mui/material";
import { Link } from 'react-router-dom';

const HeaderBox = styled(Box)(({ theme }) => ({
  height: "auto",
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `2px solid gray`,
  borderTop: `2px solid gray`,
  backgroundColor: theme.palette.primary.bgAlt,
}));

const Icon = styled("img")(({ theme }) => ({
  width: 60,
  height: 60,
  transition: "all .2s ease",
  willChange: "transform",
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: 20,
  border: "2px solid black",

  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
}));

const Links = styled(Box)(({ theme }) => ({}));

const HeaderNameLink = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.display,
  fontSize: 50,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: "white",
}));

const Hover = styled(Tooltip)(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    color: "black",
  },
}));

export { HeaderBox, Icon, Links, HeaderNameLink, StyledLink, Hover };
