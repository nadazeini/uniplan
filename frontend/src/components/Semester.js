import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TermAndYear } from "./TermAndYear";
import CourseList from "./CourseList";

export const Semester = ({ semester, removeSemester }) => {
  const [hideCourseInput, setHideCourseInput] = useState(true);
  return (
    <div
      style={{
        marginLeft: "20px",
        width: "30%",
        border: "none",
        border: "2px solid black",
        padding: "5px",
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
          margin: "10px",
          padding: "10px 20px",
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

      <CourseList hideCourseInput={hideCourseInput} />
    </div>
  );
};
