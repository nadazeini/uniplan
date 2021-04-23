import React from "react";
import Course from "./Course";

const Courses = ({ courses, removeCourse, updateCourse }) => {
  return (
    <div>
      {courses.map((course, index) => {
        return (
          <Course
            key={index}
            course={course}
            removeCourse={removeCourse}
            updateCourse={updateCourse}
          />
        );
      })}
    </div>
  );
};

export default Courses;
