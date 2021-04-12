import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SemesterForm from "./SemesterForm";
import SemesterList from "./SemesterList";

export default function TranscriptForm() {
  const [semesters, setSemester] = useState([]);
  return (
    <div>
      <SemesterList />
    </div>
  );
}
