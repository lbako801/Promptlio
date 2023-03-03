import React from "react";
import { CreatorInfo, CreatorName, CreatedAt } from "./PostCard.styles";
import { Card } from "../../../components";

const PostCard = ({ prompt, photo, creatorName, createdAt }) => {
  const formattedDate = new Date(createdAt).toDateString();

  return (
    <Card>
      <CreatorInfo>
        <CreatorName>{creatorName}</CreatorName>
        <CreatedAt>{formattedDate}</CreatedAt>
      </CreatorInfo>
      {prompt}
      {photo}
    </Card>
  );
};

export default PostCard;
