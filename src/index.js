// src/index.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken, getUser } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  NavBar,
  Posts,
  Login,
  Register,
  NewPostForm,
  SinglePostPage,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchAllPosts = async () => {
    try {
      const myToken = getToken();

      if (myToken) {
        setIsLoggedIn(true);
      }

      const {
        data: {
          data: { posts },
        },
      } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts/",
        {
          headers: {
            'Authorization': `BEARER ${myToken}`,
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
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/posts">
            <Posts allPosts={allPosts} />
            <NewPostForm
              isLoggedIn={isLoggedIn}
              setAllPosts={setAllPosts}
              allPosts={allPosts}
            />
          </Route>
          <Route exact path="/posts/:postId">
            <SinglePostPage allPosts={allPosts} />
          </Route>
          <Route path="/register">
            <Register setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/login">
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
