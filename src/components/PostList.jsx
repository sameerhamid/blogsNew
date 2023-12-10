import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Wrapper from "./Wrapper";
import { PostlistContext } from "../store/post-list-store";

import Loading from "./Loading";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { posts, loading } = useContext(PostlistContext);

  return (
    <Wrapper>
      <div className="home_container">
        {}
        {loading && <Loading />}
        {!loading && posts.length === 0 ? (
          <WelcomeMessage />
        ) : (
          !loading && posts?.map((post) => <Post post={post} key={post.id} />)
        )}
      </div>
    </Wrapper>
  );
};

export default PostList;
