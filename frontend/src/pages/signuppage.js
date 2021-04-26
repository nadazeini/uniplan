import "../styles.css";
import logo6 from "../logo6.png";
import React, { useState} from "react";
import { BrowserRouter as Link } from "react-router-dom";


export default function SignUpPage() {

  const[registered,setRegistered]= useState(false);

  const createUser = (name,email,password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: password}),
    };

    fetch("http://localhost:5000/sign-up/", requestOptions)
      .then((res) => res.json())
    setRegistered(true);
  };

if(registered){
  return(
    <div className="App">
    <div className="">
      <img alt="" src={logo6} width="10%" />
      <div className="title">
        Success
      </div>
    </div>

    <div className="wrap">
      <h3>Login to use your account</h3>
      <br></br>
      <Link to = "/login"><button className="logIn">Login</button></Link>

      <br></br>

    </div>

  </div>
  );
}
else{
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

      <input type = "text"
        placeholder="Name"
        id = "name"
        required 
      />
      <br></br> <br></br>

      <input type = "email"
        placeholder="Email"
        id = "email"
        required
      />
      <br></br> <br></br>
      <input type = "password"
        placeholder="Password"
        id = "password1"
        required
      />
      <br></br> <br></br>
      <input type = "password"
        placeholder="Confirm Password"
        id = "password2"
        required
      />
      <br></br> <br></br>
      <button type ="submit"
        onClick = {() => {
          if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("password1").value == ""){
            alert("Error: All fields must be filled out!")
          }
          else if(document.getElementById("password1").value != document.getElementById("password2").value){
            alert("Error: Passwords must match!")
          }
          else if(document.getElementById("email").value.substring(document.getElementById("email").value.length-4)!=".edu"){
            alert("Error: You must use a school email.")
          }
          else{
            createUser(document.getElementById("name").value,document.getElementById("email").value,document.getElementById("password1").value);
          }
        }}
      >
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
}