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

import { Header, Posts, NavBar, Login, Register } from "./components";

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
        <Posts allPosts={allPosts} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
