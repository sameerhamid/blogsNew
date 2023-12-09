import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Wrapper from "./Wrapper";
import { PostlistContext } from "../store/post-list-store";

import Loading from "./Loading";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { posts, addInitialPosts } = useContext(PostlistContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });

    return () => {
      console.log("cleanup function called");
      controller.abort();
    };
  }, []);

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
