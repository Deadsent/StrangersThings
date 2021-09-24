import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link } from "react-router-dom";

const Header = () =>{
  return (
    <header className="header">
      <h1 className="title">Strangers Things</h1>
      <div className="nav-links">
      <Link className="navbar-link" to="/posts">
        Posts
      </Link>
      <Link className="navbar-link" to="/login">
        Login
      </Link>
      <Link className="navbar-link" to="/register">
          Register
      </Link>
    </div>
    
    </header>
  );
  }

export default Header;