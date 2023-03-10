import React from "react";
import "./login.scss";
import { useContext, useState } from "react";
import TransparentLogo from "../../images/transparentLogo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={TransparentLogo} alt="" />
        </div>
      </div>
      <div className="container">
        <img className="logo" src={TransparentLogo} alt="" />
        <form>
          <h1>Log In</h1>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button className="loginButton" onClick={handleLogin}> */}
          <button className="loginButton">Sign In</button>

          <small>
            This page is protected by Google reCAPTCHA ot ensyre you're not a robot.
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};
