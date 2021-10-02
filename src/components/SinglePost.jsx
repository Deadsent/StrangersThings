// Daniel created this file
import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUser, getToken } from "../auth";
import { deletePost, getUsers } from "../api";
import {Messages} from "."

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
  
  const {messages, posts} = user

  return (
    <div key={post._id} className="post-card">
      <h3>{post.title}</h3>
      <button
        className="deletePost"
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
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
