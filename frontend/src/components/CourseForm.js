import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function CourseForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
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
            ref={inputRef}
            className="course-input edit"
          />
          <Button onClick={handleSubmit} className="course-button edit">
            Update
          </Button>
        </>
      ) : (
        <>
          <input
            placeholder="New Class"
            value={input}
            onChange={handleChange}
            name="text"
            style={{
              marginLeft: "40px",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px 20px",
              marginBottom: "20px",
              outline: "none",
            }}
            className="course-input"
            ref={inputRef}
          />
          <Button onClick={handleSubmit} className="course-button">
            <AddCircleIcon />
          </Button>
          <h5
            style={{
              display: "inline-block",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px 20px",
              margin: "10px",
            }}
          >
            Classes
          </h5>
        </>
      )}
    </form>
  );
}

export default CourseForm;
