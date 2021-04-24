import "../styles.css";
import logo6 from "../logo6.png";
import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function SignUpPage() {
return(
      <div className="App">
      <div className="">
        <img alt="" src={logo6} width="10%" />
        <div className="title">
          Sign Up
        </div>
      </div>

      <div className="wrap">
        <h3>Create an Account</h3>

        <input type = "email"
          placeholder="Email"
        />
        <br></br> <br></br>
        <input type = "password"
          placeholder="Password"
        />
        <br></br> <br></br>
        <input type = "password"
          placeholder="Confirm Password"
        />
        <br></br> <br></br>
        <button>
        Sign Up
        </button>

        <br></br>
        <div>
        Already have an account?
        <a class="" href="#">
             <Link to="/login"> Login</Link>
           </a>
        </div>


      </div>

    </div>
    );
}