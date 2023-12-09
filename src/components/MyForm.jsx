import React, { useContext, useRef } from "react";
import Wrapper from "./Wrapper";
import { PostlistContext } from "../store/post-list-store";

const MyForm = () => {
  const { addPost } = useContext(PostlistContext);
  const imgUrl = useRef("");
  const title = useRef("");
  const body = useRef("");
  const tags = useRef("");
  const userId = useRef("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (imgUrl.current.value === "") {
      imgUrl.current.focus();
      return;
    } else if (title.current.value === "") {
      title.current.focus();
      return;
    } else if (body.current.value === "") {
      body.current.focus();
      return;
    } else if (tags.current.value === "") {
      tags.current.focus();
      return;
    } else if (userId.current.value === "") {
      userId.current.focus();
      return;
    }
    let post = {
      imgUrl: imgUrl.current.value,
      title: title.current.value,
      body: body.current.value,
      tags: tags.current.value,
      userId: userId.current.value,
    };
    addPost(post);

    imgUrl.current.value = "";
    title.current.value = "";
    body.current.value = "";
    tags.current.value = "";
    userId.current.value = "";
  };
  return (
    <Wrapper>
      <form style={{ width: "80%" }} onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image Url:
          </label>
          <input
            ref={imgUrl}
            type="text"
            className="form-control"
            id="imageUrl"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            ref={title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content:
          </label>
          <input
            ref={body}
            type="text"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id:
          </label>
          <input
            ref={userId}
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default MyForm;