import React, { useState } from "react";
import SemesterList from "../components/SemesterList";

export default function TranscriptForm() {
  const [semesters, setSemester] = useState([]);
  return (
    <div>
      <SemesterList />
    </div>
  );
}
