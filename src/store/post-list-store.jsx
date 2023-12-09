import { createContext, useReducer } from "react";

export const PostlistContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
  updateReactions: () => {},
  addInitialPosts: () => {},
});

//reducer

const postsReducer = (state, action) => {
  let newPosts = state;
  if (action.type === "DELETE_POST") {
    newPosts = state.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "UPDATE_REACTIONS") {
    newPosts = state.map((post) =>
      post.id === action.payload.id
        ? { ...post, reactions: post.reactions + 1 }
        : post
    );
  } else if (action.type === "ADD_POST") {
    newPosts = [
      ...state,
      {
        id: action.payload.id,
        imgUrl: action.payload.imgUrl,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
    ];
  } else if (action.type == "INITIAL_POSTS") {
    newPosts = [...action.posts];
  }
  return newPosts;
};

const PostListContextProvider = (props) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);

  const addPost = (post) => {
    let tags = post.tags.trim().split(" ");

    let id = 0;
    if (posts.length == 0) {
      id = 0;
    } else {
      id = posts[posts.length - 1].id + 1;
    }
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        id,
        imgUrl: post.imgUrl,
        title: post.title,
        body: post.body,
        reactions: 0,
        userId: post.userId,
        tags: tags,
      },
    };

    dispatchPosts(addPostAction);
  };

  const deletePost = (id) => {
    const deleteItemAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatchPosts(deleteItemAction);
  };

  const updateReactions = (id) => {
    dispatchPosts({
      type: "UPDATE_REACTIONS",
      payload: {
        id,
      },
    });
  };

  const addInitialPosts = (posts) => {
    console.log(posts);
    dispatchPosts({
      type: "INITIAL_POSTS",
      posts,
    });
  };

  return (
    <PostlistContext.Provider
      value={{ posts, addPost, deletePost, updateReactions, addInitialPosts }}>
      {props.children}
    </PostlistContext.Provider>
  );
};

export default PostListContextProvider;
