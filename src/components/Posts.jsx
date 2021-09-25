import react from "react";

const Posts = (props) => {
  const { allPosts } = props;

  return (
    <div className="posts-main-container">
      {allPosts.length
        ? allPosts.map((post) => {
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
