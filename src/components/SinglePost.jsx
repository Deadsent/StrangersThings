import React, { useState, useEffect } from "react";
import { deletePost, getUsers } from "../api";
import { Messages } from ".";

const SinglePost = ({ post }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(async () => {
    try {
      const { data } = await getUsers();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (user === post.author.username) {
    setIsAuthor(true);
  }
  const { messages, posts } = user;
  
  return (
    <div key={post._id} className="post-card">
      <h3>{post.title}</h3>
      <h4>{post.author.username}</h4>
      <p>{post.description}</p>
      <p>Price: {post.price}</p>
      {isAuthor ? (
        <button
          className="postButton"
          onClick={async (event) => {
            event.preventDefault();
            try {
              await deletePost(post._id);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Delete
        </button>
      ) : (
        <Messages post={post} user={user} isAuthor={isAuthor} />
      )}
    </div>
  );
};

export default SinglePost;
