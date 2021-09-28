// src/index.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Posts,
  Login,
  Register,
  NewPostForm,
  SinglePost,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const fetchAllPosts = async () => {
    try {
      const myToken = getToken();
      const {
        data: {
          data: { posts },
        },
      } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts/",
        {
          headers: {
            "auth-token": myToken,
          },
        }
      );

      setAllPosts(posts);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header />
        <Switch>
          <Route path="/posts">
            <Posts allPosts={allPosts} />
{/* Daniel added setAllPosts */}
            <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts} />
{/* End of Daniels input */}
          </Route>
          <Route path="/register">
{/* Daniel added below code, which errors with the below code*/}
            <Route path="/posts/:postId" />
            <SinglePostPage allPosts={allPosts} />
{/* End of Daniels input */}
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
