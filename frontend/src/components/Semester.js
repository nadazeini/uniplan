import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ClassCourse from "./CourseList";
const Semester = ({
  semesters,
  completeSemester,
  removeSemester,
  editSemesterName,
}) => {
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
        marginLeft: "40px",
        width: "30%",
        border: "none",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "5px",
      }}
      className={semester.isComplete ? "semester-row complete" : "semester-row"}
      key={index}
    >
      <div
        style={{
          display: "inline-block",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px 20px",
          margin: "10px",
        }}
        key={semester.id}
        onClick={() => completeSemester(semester.id)}
      >
        {semester.text}
      </div>
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
        <EditIcon
          onClick={() => setEdit({ id: semester.id, value: semester.text })}
          className="edit-icon"
          style={{ cursor: "pointer", marginRight: "15px" }}
          fontSize="small"
        />
        <DeleteIcon
          style={{ cursor: "pointer" }}
          fontSize="small"
          onClick={() => removeSemester(semester.id)}
        />
      </div>
      <ClassCourse />
    </div>
  ));
};

export default Semester;
