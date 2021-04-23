import React from "react";

export const TermAndYear = ({ semester, completeSemester }) => {
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
