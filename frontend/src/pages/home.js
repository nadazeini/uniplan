import "../styles.css";
import logo6 from "../logo6.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return(
    <div className="App">
      <div className="nav">
        <img alt="" src={logo6} width="10%" />
        <div className="buttons">
          <Link to = "/login"><button className="logIn">Login</button></Link>
          <Link to = "/signup"><button className="signUp">Sign Up</button></Link>
        </div>
      </div>

      <div className="search">
        <img alt="" src={logo6} width="30%" />
        <h3>
        Welcome!
        </h3>
    </div>
    </div>
  );
}
