import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { getUser } from "../auth";
import { Link } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) =>{
    const myUser = getUser()
    console.log(isLoggedIn)

    return(
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
    </div>)}

export default NavBar;