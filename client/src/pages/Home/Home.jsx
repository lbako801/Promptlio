import React from "react";
import { Root } from "./Home.styles";
import { Header, PostCard } from "../../components";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

const Home = () => {
  const { loading, data, error } = useQuery(QUERY_POSTS);
  const { getPosts: posts } = data || [];

  return (
    <Root>
      {posts &&
        posts?.length > 0 &&
        posts.map(({ prompt, photo, creator, created_at, caption }, index) => (
          <PostCard
            key={index}
            prompt={prompt?.title}
            photo={photo}
            creatorName={creator?.username}
            createdAt={created_at}
            caption={caption}
          />
        ))}
    </Root>
  );
};

export default Home;
