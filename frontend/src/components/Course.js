import React, { useState } from "react";
import CourseForm from "./CourseForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export const Course = ({ course, removeCourse, updateCourse }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateCourse(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <CourseForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        padding: "5px",
        borderBottom: "1px solid black",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          display: "inline-block",
          textTransform: "uppercase",
          fontFamily: "Avenir Heavy",
        }}
      >
        {course.name}
      </div>
      <div
        className="icons"
        style={{
          textAlign: "right",
          display: "inline-block",
          float: "right",
        }}
      >
        <EditIcon
          onClick={() => setEdit({ id: course.id, value: course.name })}
          className="edit-icon"
          style={{ cursor: "pointer", marginRight: "10px" }}
          fontSize="small"
        />
        <DeleteIcon
          style={{ cursor: "pointer", marginRight: "-5px" }}
          fontSize="small"
          onClick={() => removeCourse(course.id)}
        />
      </div>
    </div>
  );
};
export default Course;
