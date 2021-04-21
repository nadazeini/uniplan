import React, { useState, useEffect, useRef, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

function SemesterForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [semesters, setSemesters] = useState([]);
  const inputRef = useRef(null);
  semesters.push("something"); //get from database - post request
  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  var years = [];
  var min = 1998,
    max = new Date().getFullYear() + 7;
  for (var i = max; i >= min; i--) {
    years.push(i);
  }
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
      {semesters.length ? (
        props.edit ? (
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
            {/* <input
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
            /> */}
            <FormControl
              className="semester-input"
              style={{ marginLeft: "10px", width: "300px" }}
            >
              <InputLabel>Select term</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="Fall">Fall</MenuItem>
                <MenuItem value="Winter">Winter</MenuItem>
                <MenuItem value="Spring">Spring</MenuItem>
                <MenuItem value="Summer">Summer</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ marginLeft: "10px", width: "300px" }}>
              <InputLabel>Select year</InputLabel>
              <Select label="Year">
                {years.map((year, index) => {
                  return (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Button onClick={handleSubmit} className="semester-button">
              <AddCircleIcon />
            </Button>
          </>
        )
      ) : (
        <div>No Information provided yet</div>
      )}
    </form>
  );
}

export default SemesterForm;
