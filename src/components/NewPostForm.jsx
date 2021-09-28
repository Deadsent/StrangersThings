import React, { useState } from "react";
import { createPost } from "../api";
import { getToken } from "../auth";

  const NewPostForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="new-post-component-main-container">
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();
            const user = getUser();

            const createdPost = await createPost(title, description, user, token);
            setAllPosts(createdPost, ...allPosts)
           

          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h3>Create Post Here</h3>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(event) => {

                
              setTitle(event.target.value);

            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="enter title"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <button type='submit'>Submit</button>


      </form>
    </div>
  );
};

export default NewPostForm;