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
  Posts,
  Login,
  Register,
  NewPostForm,
  SinglePost,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const fetchAllPosts = async () => {
    try {
      
      const myToken = getToken()

      if(myToken){
        setIsLoggedIn(true)
      }

      const {
        data: {
          data: { posts },
        },
      } = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts/",
        {
          headers: {

            "Authorization": `BEARER ${myToken}`,
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
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Switch>
          <Route path="/posts">
            <Posts allPosts={allPosts} />

          </Route>
          <Route path="/register">
{/* Daniel added below code, which errors with the below code*/}
            <Route path="/posts/:postId" />
            <SinglePostPage allPosts={allPosts} />
{/* End of Daniels input */}

            <Register />
            <NewPostForm isLoggedIn={isLoggedIn} setAllPosts={setAllPosts}/>
          </Route>
          <Route path="/register">
            <Register setIsLoggedIn={setIsLoggedIn}/>
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
