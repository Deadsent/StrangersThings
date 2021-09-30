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
              <Link
                to={`/posts/${post._id}`}
                key={post._id}
                className="link-tag"
              >
                <SinglePost post={post} />
              </Link>
            ) : null;
          })
        : null}
    </div>
  );
};

export default Posts;
