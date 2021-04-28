import "./styles.css";
import logo6 from "./logo6.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import EditReview from "./pages/editReview";
import DisplayTeacherResult from "./pages/displayTeacherResult";
import TranscriptForm from "./pages/transcriptForm";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signuppage";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/review/edit", name: "Edit Review", Component: EditReview },
  {
    path: "/search-teachers",
    name: "Display Teacher Result",
    Component: DisplayTeacherResult,
  },
  { path: "/transcript", name: "Transcript", Component: TranscriptForm },
  { path: "/login", name: "Log In", Component: LoginPage },
  { path: "/signup", name: "Sign Up", Component: SignUpPage },
];

export default function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to="/">Uniplan</Link>
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
                  <Link to="/review/edit">Submit a Review</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/search-teachers">Search for a Professor</Link>
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
      <div id="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}
