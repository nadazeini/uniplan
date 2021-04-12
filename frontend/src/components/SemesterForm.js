import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import AddCircleIcon from "@material-ui/icons/AddCircle";
function SemesterForm(props) {
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
    <form onSubmit={handleSubmit} className="semester-form">
      {props.edit ? (
        <>
          <input
            placeholder="Edit your semester"
            value={input}
            style={{
              border: "none",
              marginLeft: "40px",
              borderBottom: "1px solid black",
              outline: "none",
            }}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="semester-input edit"
          />
          <Button onClick={handleSubmit} className="semester-button edit">
            Update
          </Button>
        </>
      ) : (
        <>
          <input
            placeholder="Fall 2021"
            value={input}
            onChange={handleChange}
            name="text"
            style={{
              marginLeft: "20px",
              border: "None",
              borderBottom: "1px solid black",
              outline: "none",
            }}
            className="semester-input"
            ref={inputRef}
          />
          <Button onClick={handleSubmit} className="semester-button">
            <AddCircleIcon />
          </Button>
        </>
      )}
    </form>
  );
}

export default SemesterForm;
