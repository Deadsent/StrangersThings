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
    </header>
  );
  }

export default Header;