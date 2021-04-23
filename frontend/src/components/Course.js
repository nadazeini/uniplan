import React, { useState } from "react";
import CourseForm from "./CourseForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export const Course = ({ course, removeCourse, updateCourse }) => {
  //   const [edit, setEdit] = useState({
  //     id: null,
  //     value: "",
  //   });

  //   const submitUpdate = (value) => {
  //     updateCourse(edit.id, value);
  //     setEdit({
  //       id: null,
  //       value: "",
  //     });
  //   };

  //   if (edit.id) {
  //     return <CourseForm edit={edit} onSubmit={submitUpdate} />;
  //   }
  return (
    <div
      style={{
        marginLeft: "30px",
        width: "90%",
        border: "none",
        padding: "5px",
        margin: "10px",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          display: "inline-block",
          border: "2px solid black",
          padding: "10px 20px",
          borderRadius: "10px",
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
          padding: "10px 20px",
        }}
      >
        {/* <EditIcon
          onClick={() => setEdit({ id: course.id, value: course.name })}
          className="edit-icon"
          style={{ cursor: "pointer", marginRight: "15px" }}
          fontSize="small"
        /> */}
        <DeleteIcon
          style={{ cursor: "pointer" }}
          fontSize="small"
          onClick={() => removeCourse(course.id)}
        />
      </div>
    </div>
  );
};
export default Course;
