import React, { useState, useEffect } from "react";
import SemesterForm from "./SemesterForm";
import Semesters from "./Semesters";

const SemesterList = () => {
  const [semesters, setSemesters] = useState([]);
  const studentId = "Fake"; //to modify after authentication is done

  useEffect(() => {
    fetch("http://localhost:5000/semesters/" + studentId)
      .then((data) => data.json())
      .then((res) => {
        let term_order = ["Fall", "Winter", "Spring", "Summer"];
        res.sort((semester1, semester2) =>
          semester1.year > semester2.year
            ? 1
            : semester1.year === semester2.year
            ? term_order.indexOf(semester1.term) -
              term_order.indexOf(semester2.term)
            : -1
        );
        setSemesters(res);
      });
  }, []);

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
    // semesters.push(semester);
    // const newSemesters = [...semesters];

    //sort by year, term if equal
    // let term_order = ["Fall", "Winter", "Spring", "Summer"];
    // newSemesters.sort((semester1, semester2) =>
    //   semester1.year > semester2.year
    //     ? 1
    //     : semester1.year === semester2.year
    //     ? term_order.indexOf(semester1.term) -
    //       term_order.indexOf(semester2.term)
    //     : -1
    // );

    //send put request
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAuth: "Fake", //to change to id of logged in user
        year: semester.year,
        term: semester.term,
      }),
    };
    fetch("http://localhost:5000/semesters/" + semester.id, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        let term_order = ["Fall", "Winter", "Spring", "Summer"];
        res.sort((semester1, semester2) =>
          semester1.year > semester2.year
            ? 1
            : semester1.year === semester2.year
            ? term_order.indexOf(semester1.term) -
              term_order.indexOf(semester2.term)
            : -1
        );
        setSemesters(res);
      });
    //apply changes
    // setSemesters(newSemesters);
  };

  const removeSemester = (id) => {
    // const removedArr = [...semesters].filter((semester) => semester.id !== id);
    // setSemesters(removedArr);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAuth: "Fake", //to change to id of logged in user
      }),
    };
    fetch("http://localhost:5000/semesters/" + id, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setSemesters(res);
      });
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
