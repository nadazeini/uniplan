import React, { useState } from "react";
import SemesterForm from "./SemesterForm";
import Semester from "./Semester";

function SemesterList() {
  const [semesters, setSemesters] = useState([]);

  const addSemester = (semester) => {
    if (!semester.text || /^\s*$/.test(semester.text)) {
      return;
    }

    const newSemesters = [semester, ...semesters];

    setSemesters(newSemesters);
    console.log(...semesters);
  };

  const editSemesterName = (semesterId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setSemesters((prev) =>
      prev.map((item) => (item.id === semesterId ? newValue : item))
    );
  };

  const removeSemester = (id) => {
    const removedArr = [...semesters].filter((semester) => semester.id !== id);

    setSemesters(removedArr);
  };

  const completeSemester = (id) => {
    let updatedsemesters = semesters.map((semester) => {
      if (semester.id === id) {
        semester.isComplete = !semester.isComplete;
      }
      return semester;
    });
    setSemesters(updatedsemesters);
  };

  return (
    <>
      <SemesterForm onSubmit={addSemester}></SemesterForm>
      <Semester
        semesters={semesters}
        completeSemester={completeSemester}
        removeSemester={removeSemester}
        editSemesterName={editSemesterName}
      ></Semester>
    </>
  );
}

export default SemesterList;
