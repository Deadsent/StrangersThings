// Daniel created this file
import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUser, getToken } from "../auth";

const SinglePost = ({ post }) => {
  const [isAuthor, setIsAuthor] = useState(false);

  const myUser = getUser();
  const myToken = getToken();
  if (myUser === post.author.username) {
    setIsAuthor(true);
  }

  
  return (
    <div key={post._id} className="post-card">
      <h3>{post.title}</h3>
      <button onClick={(event) =>{
          event.preventDefault()
          deletePost()}}>Delete</button>
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
