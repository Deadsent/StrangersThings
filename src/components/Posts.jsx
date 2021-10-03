import React from "react";

// Daniel added import of Link and SinglePostPage
import { SinglePost } from ".";
import { Link } from "react-router-dom";

// Daniel destructured allPosts
const Posts = ({ allPosts }) => {
  return (
    <div className="posts-main-container">
      {allPosts.length
        ? allPosts.map((post) => {
            return post.active ? (
            
                <SinglePost post={post} />
              
            ) : null;
          })
        : null}
    </div>
  );
};

export default Posts;
