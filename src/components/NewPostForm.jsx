import React, { useState } from "react";
import { createPost } from "../api";
import { getToken } from "../auth";

const NewPostForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('')
  const {setAllPosts, allPosts} = props
  return (
    <div className="new-post-component-main-container">
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();
            const createdPost = await createPost(
              title,
              description,
              token
            );
            
            setAllPosts([createdPost.data.post, ...allPosts]);
            console.log(createdPost)
            
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
            required
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            required
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            required
          ></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
