// Daniel created this file

import React from "react";
import { useParams } from "react-router";
import { SinglePost } from ".";

const SinglePostPage = ({ allPosts }) => {
  const { postId } = useParams();

  const myPost = allPosts.find((post) => post._id === postId)

  if (!myPost) {
    return (
      <div className="post-card">
        <h3> The post with id {postId} was not found</h3>
      </div>
    );
  }

  return (
    <div className="posts-main-container">
      <SinglePost post={myPost} />
    </div>
  );
};

export default SinglePostPage;
