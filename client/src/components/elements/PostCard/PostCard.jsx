import React from "react";
import {
  StyledPostCard,
  CreatorInfo,
  CreatorName,
  CreatedAt,
  Prompt,
  Caption,
} from "./PostCard.styles";

const PostCard = ({ prompt, photo, creatorName, createdAt, caption }) => {
  const convertedDate = parseInt(createdAt);
  const formattedDate = new Date(
    convertedDate !== "NaN" ? convertedDate : createdAt
  ).toDateString();

  return (
    <StyledPostCard>
      {/* TODO: implement photos when ready */}
      <CreatorInfo>
        <CreatorName>{creatorName}</CreatorName>
        <CreatedAt>{formattedDate}</CreatedAt>
      </CreatorInfo>
      <Prompt>Prompt: {prompt}</Prompt>
      {caption && <Caption>"{caption}"</Caption>}
    </StyledPostCard>
  );
};

export default PostCard;
