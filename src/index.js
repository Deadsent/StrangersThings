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

import { Header, Posts, Login, Register, NewPostForm } from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const fetchAllPosts = async () => {
    try {
      const myToken = getToken()
      const {
        data: {
          data: { posts },
        },
      } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts/", {
          headers: {
            "Authorization": `Bearer ${myToken}`,
          }
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
            <NewPostForm isLoggedIn={isLoggedIn} setAllPosts={setAllPosts} allPosts={allPosts}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
