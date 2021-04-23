import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import Semesters from "./Semesters";
import CourseList from "./CourseList";

const SemesterList = () => {
  const [semesters, setSemesters] = useState([]);

  const addSemester = (semester) => {
    if ((!semester.term && !semester.year) || /^\s*$/.test(semester.term)) {
      return;
    }
    semesters.push(semester);
    const newSemesters = [...semesters];
    setSemesters(newSemesters);
    console.log(...semesters);
  };

  const removeSemester = (id) => {
    const removedArr = [...semesters].filter((semester) => semester.id !== id);
    setSemesters(removedArr);
  };

  return (
    <>
      <SemesterForm onSubmit={addSemester}></SemesterForm>
      <Semesters
        semesters={semesters}
        removeSemester={removeSemester}
      ></Semesters>
    </>
  );
};

export default SemesterList;
