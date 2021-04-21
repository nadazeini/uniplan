import React, { useState, useEffect, useRef, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

function SemesterForm(props) {
  const [termInput, setTermInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [yearInput, setYearInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [semesters, setSemesters] = useState([]);
  const inputRef = useRef(null);
  semesters.push("something"); //to later get dynamically from db (get request)

  //get years for dropdown
  var years = [];
  var min = 1998,
    max = new Date().getFullYear() + 7;
  for (var i = max; i >= min; i--) {
    years.push(i);
  }

  const handleTermChange = (e) => {
    setTermInput(e.target.value);
  };
  const handleYearChange = (e) => {
    setYearInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      term: termInput,
      year: yearInput,
    });
    setTermInput("");
    setYearInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="semester-form">
      {semesters.length ? (
        props.edit ? (
          <>
            <input
              placeholder="Edit your semester"
              value={termInput}
              style={{
                border: "none",
                marginLeft: "40px",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              onChange={handleTermChange}
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
            <FormControl
              className="semester-input"
              style={{ marginLeft: "10px", width: "300px" }}
            >
              <InputLabel>Select term</InputLabel>
              <Select onChange={handleTermChange} label="Age">
                <MenuItem value="Fall">Fall</MenuItem>
                <MenuItem value="Winter">Winter</MenuItem>
                <MenuItem value="Spring">Spring</MenuItem>
                <MenuItem value="Summer">Summer</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{ marginLeft: "10px", width: "300px" }}>
              <InputLabel>Select year</InputLabel>
              <Select onChange={handleYearChange} label="Year">
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
