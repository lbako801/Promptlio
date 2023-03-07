import React from "react";
import StyledCard from "./Card.styles";

const Card = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
