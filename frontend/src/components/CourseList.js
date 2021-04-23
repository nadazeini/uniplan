import React, { useState } from "react";
import CourseForm from "./CourseForm";
import Courses from "./Courses";

function CourseList(props) {
  const [courses, setCourses] = useState([]);

  const addClass = (course) => {
    if (!course.name || /^\s*$/.test(course.name)) {
      return;
    }
    // courses.push(course);
    // const newCourses = [...courses];
    // setCourses(newCourses);
    // console.log(...courses);

    const newCourses = [course, ...courses];

    setCourses(newCourses);
    console.log(...courses);
  };

  const updateCourse = (courseId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }

    setCourses((prev) =>
      prev.map((item) => (item.id === courseId ? newValue : item))
    );
  };

  const removeCourse = (id) => {
    const removedArr = [...courses].filter((course) => course.id !== id);

    setCourses(removedArr);
  };

  return (
    <>
      <CourseForm onSubmit={addClass} hideCourseInput={props.hideCourseInput} />
      <Courses
        courses={courses}
        removeCourse={removeCourse}
        updateCourse={updateCourse}
      />
    </>
  );
}

export default CourseList;
