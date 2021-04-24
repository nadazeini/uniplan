import "../styles.css";
import logo6 from "../logo6.png";
import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LoginPage() {
    return(
      <div className="App">
      <div className="">
        <img alt="" src={logo6} width="10%" />
        <div className="title">
          LOGIN
        </div>
      </div>

      <div className="wrap">
        <h3>Log Into Your Account</h3>

        <input
          placeholder="Email"
        />
        <br></br> <br></br>
        <input type = "password"
          placeholder="Password"
        />
        <br></br> <br></br>
        <button>
        LOGIN
        </button>

        <br></br>
        <div>
        Need an account?
        <a class="" href="#">
             <Link to="/signup"> Sign Up</Link>
           </a>
        </div>


      </div>

    </div>
    );
}