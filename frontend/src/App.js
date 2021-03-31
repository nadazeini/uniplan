import "./styles.css";
import logo6 from "./logo6.png";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home";
import EditReview from "./components/editReview";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/review/edit">Edit Review</Link>
            </li>
          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/review/edit">
            <EditReview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [searched, setSearched] = useState(false);

  const example = ["Ex1", "Ex2", "Ex3", "Ex4", "Ex5"];

// .then(res => console.log(res.teacher))

// {results.map((entry) => (
//   <div>{entry}</div>
// ))}


  const getHome = () => {

    fetch("http://localhost:5000/")
       .then(res => res.text())
       .then(res => setResults([res]));
  };


  const getResults = (input) => {

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: input })
        };

    fetch("http://localhost:5000/search-teachers/", requestOptions)
       .then(res => res.json())

       .then(res => setResults(res.teacher[0]));

      setSearched(true);
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
      {searched ? "teacher: " + results.name : ""}
      </div>
      <div>
      {searched ? "rating: " + results.rating : ""}
      </div>
    </div>
  );
}
