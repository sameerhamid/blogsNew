import React, { useContext, useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";

import { MdDelete } from "react-icons/md";
import { PostlistContext } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost, updateReactions } = useContext(PostlistContext);
  const [myPost, setMyPost] = useState({});

  useEffect(() => {
    setMyPost({ ...post, readmore: false });
  }, []);

  const handleReadMore = () => {
    setMyPost({ ...myPost, readmore: !myPost.readmore });
  };

  console.log({ myPost });
  return (
    <div className="card" style={{ width: "16rem", height: "fit-content" }}>
      <div className="card-body">
        <p
          style={{
            textAlign: "center",
            fontSize: 18,
            marginBottom: 0,
          }}>
          {post.title}
        </p>

        <div>
          <p
            className={`card-text my_body ${myPost.readmore && "showReadmore"}`}
            style={{ fontSize: 12, marginBottom: 0 }}>
            {post.body}
          </p>
          <div
            onClick={handleReadMore}
            className="readmore"
            style={{
              fontSize: 14,
              marginBottom: 10,
              marginTop: 10,
              cursor: "pointer",
            }}>
            {myPost.readmore ? "readless..." : "readmore..."}
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          {post.tags.map((tag) => (
            <span
              className="badge text-bg-warning"
              style={{ marginRight: 4 }}
              key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="bottom_row">
          <div
            className="badge text-bg-primary position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => updateReactions(post.id)}>
            <FcLike fontSize={16} />

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reactions}
            </span>
          </div>

          <div
            className="badge text-bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}>
            <MdDelete fontSize={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
