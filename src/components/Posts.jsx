import React from "react";

// Daniel added import of Link and SinglePostPage
import { SinglePost } from ".";
import { Link } from 'react-router-dom';


// Daniel destructured allPosts 
  const Posts = ({ allPosts }) => {

  return (
    <div className="posts-main-container">
      {allPosts.length
        ? allPosts.map((post) => {

            return (
// Daniel added Link and SinglePost tag
              <Link to={'/posts/${post._id}'}
              key={post._id}
              className="link-tag">
              <SinglePost post={post} />
              </Link>
// Daniel deleted the following code
              // <div key={post._id} className="post-card">
              //   <h3>{post.title}</h3>
              //   <p>{post.description}</p>
              // </div>

 //End of Daniels added portion of code
            );
          })
        : null}
    </div>
  );
};

export default Posts;
