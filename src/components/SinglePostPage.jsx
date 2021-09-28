// Daniel created this file

import React from "react";
import { useParams } from "react-router";
import { SinglePost } from ".";

const SinglePostPage = ({ allPosts }) => {
    const { postId } = useParams()

    const myPost = allPosts.find((post) => {
if (post._id === postId){
    return true;
}else {
    return false;
}
    });
    
    if(!myPost){
        return(
            <div className = 'post-card'>
                <h3> The post with id {post._Id} was not found</h3>

            </div>
        )
    }

    return (
        <div className="posts-main-container">
            <SinglePost post={myPost}/>

        </div>
);
};

export default SinglePostPage;