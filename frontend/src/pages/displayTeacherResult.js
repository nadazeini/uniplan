import React, { Component, useState } from "react";
import "../styles.css";
import logo6 from "../logo6.png";

export default function DisplayTeacherResult() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [searched, setSearched] = useState(false);

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

  function avg(arr = []) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  if (searched) {
    if (results !== undefined && Object.keys(results).length !== 0) {
      return (
        <div className="App">
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

          <div className="results" id="results">
            <div className="info">
              <div className="teacherName">{searched ? results.name : ""}</div>
              <div>{searched ? "Department: " + results.department : ""}</div>
              <div>
                {searched ? "Average rating: " + avg(results.ratings) : ""}
              </div>
              <div>
                {searched
                  ? "based on " + results.ratings.length + " ratings"
                  : ""}
              </div>
              <div>
                {searched ? "Classes Taught: " + results.classestaught : ""}
              </div>
            </div>

            <div className="bioReview">
              <div>
                <div className="bio">{searched ? "About me" : ""}</div>
                <div>{searched ? results.bio : ""}</div>
              </div>
              <div>
                <div className="reviews">
                  <div>{searched ? "Reviews:" : ""}</div>
                </div>
              </div>
              {searched
                ? results.reviews.map((entry) => <div>{entry}</div>)
                : ""}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
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

          <div className="results">No results found.</div>
        </div>
      );
    }
  } else {
    return (
      <div className="App" id="searchpage">
        <div className="search" id="search">
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
      </div>
    );
  }
}
