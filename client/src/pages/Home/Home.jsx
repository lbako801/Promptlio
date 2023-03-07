import React from "react";
import { Root } from "./Home.styles";
import { PostCard } from "../../components";
<<<<<<< HEAD

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
=======
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
>>>>>>> b0a2bf3aabcaa7c73acbdde695e0cad34bc750a6

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { getPosts: posts } = data || [];

  return (
    <Root>
      {posts &&
        posts?.length > 0 &&
        posts.map(
          ({
            prompt: { title: prompt },
            photo,
            creator: { username: creatorName },
            created_at,
            caption,
          }) => (
            <PostCard
              key={prompt}
              prompt={prompt}
              photo={photo}
              creatorName={creatorName}
              createdAt={created_at}
              caption={caption}
            />
          )
        )}
    </Root>
  );
};

export default Home;
