// Daniel created this file

import React from "react";

const SinglePost = ({ post }) => {
  //const { isAuthor, setIsAuthor} = useState(false);

  return (
    <div key={post._id} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
