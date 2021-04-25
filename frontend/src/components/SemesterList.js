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

    const found = semesters.some(
      (value) =>
        value["year"] === semester.year && value["term"] === semester.term
    );

    if (found) {
      console.log("already added");
      return;
    }
    semesters.push(semester);
    const newSemesters = [...semesters];

    //sort by year, term if equal
    let term_order = ["Fall", "Winter", "Spring", "Summer"];
    newSemesters.sort((semester1, semester2) =>
      semester1.year > semester2.year
        ? 1
        : semester1.year === semester2.year
        ? term_order.indexOf(semester1.term) -
          term_order.indexOf(semester2.term)
        : -1
    );
    //apply changes
    setSemesters(newSemesters);
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
