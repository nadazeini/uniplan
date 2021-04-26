import React, { useState } from "react";

import { Semester } from "./Semester";

const Semesters = ({ semesters, removeSemester }) => {
  return (
    <div>
      {semesters.map((semester, index) => {
        return (
          <Semester
            key={index}
            semester={semester}
            semesters={semesters}
            removeSemester={removeSemester}
          />
        );
      })}
    </div>
  );
};

export default Semesters;
