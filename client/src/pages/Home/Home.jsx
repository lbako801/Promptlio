import React from "react";
import { Root } from "./Home.styles";
import { PostCard } from "../../components";

const dummyPostData = [
  {
    prompt: "FIND A COFFEE SHOP",
    photo: "TEST PHOTO URL",
    creatorName: "Hugh Mungus",
    createdAt: "2023-03-03T04:31:38+00:00",
  },
  {
    prompt: "FIND An Offroad SHOP",
    
    photo: "TEST PHOTO URL",
    creatorName: "Hugh Mungus",
    createdAt: "2023-03-03T04:31:38+00:00",
  },
  {
    prompt: "FIND A gun SHOP",
    photo: "TEST PHOTO URL",
    creatorName: "Hugh Mungus",
    createdAt: "2023-03-03T04:31:38+00:00",
  },
  {
    prompt: "FIND A Tea SHOP",
    photo: "TEST PHOTO URL",
    creatorName: "Hugh Mungus",
    createdAt: "2023-03-03T04:31:38+00:00",
  },
];

const Home = () => {
  return (
    <Root>
      {dummyPostData?.length > 0 &&
        dummyPostData.map(({ prompt, photo, creatorName, createdAt }) => (
          <PostCard
            key={prompt}
            prompt={prompt}
            photo={photo}
            creatorName={creatorName}
            createdAt={createdAt}
          />
        ))}
    </Root>
  );
};

export default Home;