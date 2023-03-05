import React, { useState } from "react";

import { StyledCard } from "./PromptCard.styles";

const PromptCard = ({ title, id, stateSetter, isSelected }) => {
  const handleClick = () => {
    stateSetter({ title, id });
  };

  return (
    <>
      <StyledCard isSelected={isSelected} onClick={handleClick}>
        {title}
      </StyledCard>
    </>
  );
};

PromptCard.defaultProps = {
  // handleClick: () => window.alert("ERROR IN SETTING PROMPT"),
  title:
    "There should be a prompt for you here, but for some reason we got an error instead :(",
};

export default PromptCard;
