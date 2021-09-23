import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken } from "../auth";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" auth-component-main-container">
      <form>
        <fieldset className="auth-component-input">
          <label htmlFor="userName">User name</label>
          <input
            id="userName"
            type="text"
            placeHolder="enter userName"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            id="login"
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const {
                  data: { token },
                } = await loginUser(userName, password);
                storeToken(token);

                setUserName("");
                setPassword("");
              } catch (error) {
                console.log(error);
              }
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>
        </fieldset>
      </form>
    </div>
  );
};
