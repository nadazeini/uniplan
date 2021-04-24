import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TermAndYear } from "./TermAndYear";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CourseList from "./CourseList";
import Course from "./Course";

export const Semester = ({ semester, removeSemester }) => {
  const [hideCourseInput, setHideCourseInput] = useState(true);
  const [courses, setCourses] = useState([]);
  const addCourse = (course) => {
    if (!course.name || /^\s*$/.test(course.name)) {
      return;
    }
    courses.push(course);
    const newCourses = [...courses];
    setCourses(newCourses);
    // console.log(courses);
    semester.courses = courses;
    // console.log(semester.term);
    // console.log(semester.courses);
  };
  // const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [courseInput, setCourseInput] = useState("");
  const handleCourseChange = (e) => {
    setCourseInput(e.target.value);
  };
  const handleCourseSubmit = (e) => {
    e.preventDefault();
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
          textAlign: "right",
          display: "inline-block",
          float: "right",
          marginRight: "15px",
          marginTop: "15px",
          padding: "7px 20px",
        }}
      >
        <AddCircleIcon
          style={{
            cursor: "pointer",
            marginTop: "-50px",
            marginRight: "7px",
            color: "#3574c3",
          }}
          fontSize="small"
          onClick={() => {
            setHideCourseInput(false);
          }}
        />
        <DeleteIcon
          style={{
            cursor: "pointer",
            marginTop: "-50px",
            marginRight: "-30px",
            color: "red",
          }}
          fontSize="small"
          onClick={() => removeSemester(semester.id)}
        />
      </div>

      {/* <CourseList
        semester={semester}
        semesters={semesters}
        setSemesters={setSemesters}
        hideCourseInput={hideCourseInput}
      /> */}

      <TextField
        id="standard-basic"
        label="Enter course name"
        placeholder="New course"
        value={courseInput}
        onChange={handleCourseChange}
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
        onClick={handleCourseSubmit}
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
      {semester.courses.map((course, index) => {
        return <Course course={course} key={index} />;
      })}
    </div>
  );
};
