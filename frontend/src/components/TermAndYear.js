import React from "react";
import Course from "./Course";
export const TermAndYear = ({ semester }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        fontWeight: "bold",
      }}
      key={semester.id}
    >
      {semester.term + " " + semester.year}
    </div>
  );
};
