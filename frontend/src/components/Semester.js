import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ClassCourse from "./CourseList";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TermAndYear } from "./TermAndYear";

const Semester = ({ semesters, removeSemester, editSemesterName }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editSemesterName(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <SemesterForm edit={edit} onSubmit={submitUpdate} />;
  }

  return semesters.map((semester, index) => (
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
      key={index}
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
        {/* <EditIcon
          onClick={() => setEdit({ id: semester.id, value: semester.text })}
          className="edit-icon"
          style={{ cursor: "pointer", marginRight: "15px" }}
          fontSize="small"
        /> */}
        <DeleteIcon
          style={{
            cursor: "pointer",
            marginTop: "-50px",
            marginRight: "-30px",
          }}
          fontSize="small"
          onClick={() => removeSemester(semester.id)}
        />
      </div>
      <ClassCourse />
    </div>
  ));
};

export default Semester;
