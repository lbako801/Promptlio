import React from "react";
import { Root } from "./Home.styles";
import { PostCard } from "../../components";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { getPosts: posts } = data || [];
  console.log(posts);

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
