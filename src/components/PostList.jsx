import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Wrapper from "./Wrapper";
import { PostlistContext } from "../store/post-list-store";

import Loading from "./Loading";

const PostList = () => {
  const { posts, addInitialPosts } = useContext(PostlistContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <div className="home_container">
        {loading ? (
          <Loading />
        ) : (
          posts?.map((post) => {
            return <Post post={post} key={post.id} />;
          })
        )}
      </div>
    </Wrapper>
  );
};

export default PostList;
