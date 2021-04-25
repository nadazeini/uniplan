import React, { useState, useEffect } from "react";
import Course from "./Course";

const Courses = ({ semester }) => {
  //using state to handle remove/delete course
  //adding is just modifying props
  const [courses, setCourses] = useState([]); //using this to rerender comp after delete/update

  //will re-render all courses everytime semester.courses changes
  useEffect(() => {
    // console.log("adding, removing ");
    // console.log(courses);
  }, [courses]); //or semester.courses

  const updateCourse = (courseId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }
    setCourses((prev) =>
      prev.map((item) => (item.id === courseId ? newValue : item))
    );
    //find course to update in courses of the semester
    courses.forEach((course) => {
      if (course.id === courseId) {
        course.name = newValue.name;
      }
    });
    // console.log(semester.courses);
  };

  const removeCourse = (id) => {
    const removedArr = [...semester.courses].filter(
      (course) => course.id !== id
    );
    semester.courses = removedArr.slice(0);
    setCourses(removedArr);
  };

  return (
    <div>
      {semester.courses.map((course, index) => {
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
