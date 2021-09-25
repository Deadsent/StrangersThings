// src/index.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Posts, Login, Register } from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const fetchAllPosts = async () => {
    try {
      const {
        data: {
          data: { posts },
        },
      } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts/"
      );
      console.log(posts, "axios");

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
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Posts allPosts={allPosts}/>
          <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts}></NewPostForm>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
