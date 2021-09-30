import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link } from "react-router-dom";
import { getUser } from "../auth";


const Header = ({isLoggedIn, setIsLoggedIn}) =>{
  const myUser = getUser()
  console.log(isLoggedIn)
  return (
    <header className="header">
      {myUser ? <h1 className="title">Welcome to Stranger's Things, {myUser}!</h1>
      : <h1 className="title">Welcome To Stranger's Things, Guest!</h1>}
      
      <div className="nav-links">
      <Link className="navbar-link" to="/posts">
        Posts
      </Link>
      {isLoggedIn ? 
        <Link className="navbar-link" onClick={()=>
        {setIsLoggedIn(false)
        localStorage.clear()}} to="/">Log Out</Link>
      : <Link className="navbar-link" to="/login">
        Login
      </Link> }
      <Link className="navbar-link" to="/register">
          Register
      </Link>
    </div>
    
    </header>
  );
  }

export default Header;