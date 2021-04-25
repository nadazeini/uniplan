import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TermAndYear } from "./TermAndYear";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Courses from "./Courses";

export const Semester = ({ semester, removeSemester }) => {
  const [hideCourseInput, setHideCourseInput] = useState(true);

  //handle adding courses here, since using textfield here
  const addCourse = (course) => {
    if (!course.name || /^\s*$/.test(course.name)) {
      return;
    }
    semester.courses.push(course);
  };

  const [courseInput, setCourseInput] = useState("");

  const handleCourseChange = (e) => {
    setCourseInput(e.target.value);
  };
  const handleCourseSubmit = (e) => {
    e.preventDefault();
    setHideCourseInput(true);
    addCourse({
      id: Math.floor(Math.random() * 10000),
      name: courseInput,
    });
    setCourseInput("");
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        width: "30%",
        display: "inline-block",
        border: "none",
        border: "2px solid black",
        padding: "5px",
        verticalAlign: "top",
        marginTop: "25px",
      }}
      className={semester.isComplete ? "semester-row complete" : "semester-row"}
    >
      <TermAndYear semester={semester} />
      <div
        className="icons"
        style={{
          float: "right",
          marginTop: "-25px",
        }}
      >
        <AddCircleIcon
          style={{
            cursor: "pointer",
            color: "#3574c3",
            marginRight: "10px",
          }}
          fontSize="small"
          onClick={() => {
            setHideCourseInput(false);
          }}
        />
        <DeleteIcon
          style={{
            cursor: "pointer",
            color: "red",
          }}
          fontSize="small"
          onClick={() => removeSemester(semester.id)}
        />
      </div>
      {!hideCourseInput ? (
        <>
          <TextField
            id="standard-basic"
            label="Enter course name"
            placeholder="New course"
            value={courseInput}
            onChange={handleCourseChange}
            name="text"
            style={{
              float: "left",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            className="course-input"
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                handleCourseSubmit(e);
              }
            }}
          />
          <Button
            onClick={handleCourseSubmit}
            style={{
              marginTop: "-50px",
              marginLeft: "200px",
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
        <div></div>
      )}

      <Courses semesterCourses={semester.courses} semester={semester} />
    </div>
  );
};
