import "../styles.css";
import logo6 from "../logo6.png";
import React, { useState } from "react";
import { BrowserRouter as Switch, Link } from "react-router-dom";


export default function LoginPage() {

  const[loggedIn,setloggedIn]= useState(false);
  const [results, setResults] = useState({});

  const checkCredentials = (email,password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: email, password: password}),
    };

    fetch("http://localhost:5000/log-in/", requestOptions)
    .then((res) => res.json())
    .then((res) => setResults(res.user));

    if (results == null)
    {
      console.log("null results");
      return null;
    }

    else if (results !== undefined && Object.keys(results).length !== 0) {
      setloggedIn(true);
      console.log("credentials matched");
    }
    else {
      setloggedIn(false);
      console.log("credentials not found");
    }

  };

  if(loggedIn){
    return(
      document.location.href = "/"
    );
  }
  else{
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

      <input type = "email"
      placeholder="Email"
      id = "email"
      required
      />
      <br></br> <br></br>
      <input type = "password"
      placeholder="Password"
      id = "password"
      required
      />
      <br></br> <br></br>
      <button type = "submit"
      onClick = {() => {
        if(document.getElementById("email").value === "" || document.getElementById("password").value === ""){
          alert("Error: All fields must be filled out!")
        }
        else if(document.getElementById("email").value.substring(document.getElementById("email").value.length-4)!==".edu"){
          alert("Error: You must use a school email.")
        }
        else{
          checkCredentials(document.getElementById("email").value,document.getElementById("password").value,);
        }
      }}
      >
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
}
