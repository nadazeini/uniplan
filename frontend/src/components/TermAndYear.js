import React from "react";

export const TermAndYear = ({ semester, completeSemester }) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px 20px",
        margin: "10px",
      }}
      key={semester.id}
      onClick={() => completeSemester(semester.id)}
    >
      {semester.term + " " + semester.year}
    </div>
  );
};
