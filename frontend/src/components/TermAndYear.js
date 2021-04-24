import React from "react";
import Course from "./Course";
export const TermAndYear = ({ semester }) => {
  return (
    <div
      style={{
        display: "inline-block",
        borderRadius: "10px",
      }}
      key={semester.id}
    >
      {semester.term + " " + semester.year}
    </div>
  );
};
