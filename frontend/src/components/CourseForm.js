import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function CourseForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      {props.edit ? (
        <>
          <input
            placeholder="Edit your class"
            value={input}
            style={{
              marginLeft: "100px",
              outline: "none",
            }}
            onChange={handleChange}
            name="text"
            className="course-input edit"
          />
          <Button onClick={handleSubmit} className="course-button edit">
            Update
          </Button>
        </>
      ) : (
        <>
          {!props.hideCourseInput ? (
            <>
              <TextField
                id="standard-basic"
                label="Enter course name"
                placeholder="New course"
                value={input}
                onChange={handleChange}
                name="text"
                style={{
                  marginLeft: "20px",
                  borderRadius: "10px",
                  marginTop: "5px",
                  display: "inline-block",
                }}
                className="course-input"
              />
              <Button
                onClick={handleSubmit}
                style={{
                  marginTop: "-50px",
                  marginLeft: "175px",
                  backgroundColor: "transparent",
                  color: "green",
                  //to change based on whenever use enters
                }}
                disableRipple
              >
                <CheckCircleIcon fontSize="small" />
              </Button>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </form>
  );
}

export default CourseForm;
