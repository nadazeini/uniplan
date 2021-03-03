import "./styles.css";
import logo6 from "./logo6.png";

import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const example = ["Ex1", "Ex2", "Ex3", "Ex4", "Ex5"];


  const getHome = () => {

    fetch("http://localhost:5000/")
       .then(res => res.text())
       .then(res => setResults([res]));
  };


  const getResults = (input) => {

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'teacher3' })
        };

    fetch("http://localhost:5000/search-teachers/", requestOptions)
       .then(res => res.json())
       .then(res => console.log(res));
  };

  return (
    <div className="App">
      <div className="nav">
        <img src={logo6} width="10%" />
        <div className="buttons">
          <button className="logIn">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>

      <div className="search">
        <img src={logo6} width="30%" />
        <h3>Input a professor's name to search!</h3>

        <input
          placeholder="Your Professor"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            console.log(search);
            getResults(search);
          }}
        >
          Search
        </button>
      </div>

      <div className="results">
      {results.map((entry) => (
        <div>{entry}</div>
      ))}
      </div>
    </div>
  );
}
