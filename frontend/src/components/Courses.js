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
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAuth: "Fake", //to change to id of logged in user
        name: newValue.name,
      }),
    };
    fetch(
      "http://localhost:5000/course/" + semester.id + "/" + courseId,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //find course to update in courses of the semester
        semester.courses.forEach((course) => {
          if (course.id === courseId) {
            course.name = res.name;
          }
        });
        setCourses((prev) =>
          prev.map((item) => (item.id === courseId ? res : item))
        );
      });
  };

  const removeCourse = (id) => {
    // const removedArr = [...semester.courses].filter(
    //   (course) => course.id !== id
    // );
    // semester.courses = removedArr.slice(0);
    // setCourses(removedArr);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAuth: "Fake", //to change to id of logged in user
      }),
    };
    fetch(
      "http://localhost:5000/course/" + semester.id + "/" + id,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        semester.courses = res;
        setCourses(res);
      });
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
