import "./styles.css";
import logo6 from "./logo6.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import EditReview from "./pages/editReview";
import LoginPage from "./pages/loginpage";
import DisplayTeacherResult from "./pages/displayTeacherResult";
import TranscriptForm from "./pages/transcriptForm";

export default function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Uniplan
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/review/edit">Edit Review</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/search-teachers">Display Teacher Result</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/transcript">Transcript</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/review/edit">
            <EditReview />
          </Route>
          <Route path="/search-teachers">
            <DisplayTeacherResult />
          </Route>
          <Route path="/transcript">
            <TranscriptForm />
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
      .then((res) => res.text())
      .then((res) => setResults([res]));
  };

  const getResults = (input) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: input }),
    };

    fetch("http://localhost:5000/search-teachers/", requestOptions)
      .then((res) => res.json())

      .then((res) => setResults(res.teacher[0]));

    setSearched(true);
  };

  return (
    <div className="App">
      <div className="nav">
        <img alt="" src={logo6} width="10%" />
        <div className="buttons">
          <button className="logIn">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>

      <div className="search">
        <img alt="" src={logo6} width="30%" />
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
      <div>{searched ? "rating: " + results.rating : ""}</div>
    </div>
  );
}
