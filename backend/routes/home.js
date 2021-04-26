const express = require("express");
const { Db } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");
const Student = mongoose.model("Students");
const CoursePlan = mongoose.model("CoursePlan");
const Course = mongoose.model("Course");

router.get("/", (req, res) => {
  res.send("Welcome");
});
router.post("/add-teacher", (req, res) => {
  const { name, rating } = req.body;
  if (!name) {
    return res.status(422).json({ error: "need name" });
  }
  Teacher.findOne({ name: name, rating: rating })
    .then((existingTeacher) => {
      if (existingTeacher) {
        return res.status(422).json({ error: "already exists" });
      }
      const teacher = new Teacher({
        name,
        rating,
      });
      teacher
        .save()
        .then((teacher) => {
          res.json({ message: "teacher added" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});
router.post("/search-teachers", (req, res) => {
  const { name } = req.body;
  Teacher.find({ name: name })
    .then((teacher) => {
      //response is teacher obj
      res.json({ teacher });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

//add-class request
router.post("/add-class", (req, res) => {
  const { name, department } = req.body;
  if (!name) {
    return res.status(422).json({ error: "need course name" });
  }
  Course.findOne({ name: name, department: department })
    .then((existingCourse) => {
      if (existingCourse) {
        return res.status(422).json({ error: "this course already exists" });
      }
      const course = new Course({
        name,
        department,
      });
      course
        .save()
        .then((course) => {
          res.json({ message: "course added" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

//add semester (courseplan) request
router.post("/add-semester", (req, res) => {
  const { year, term } = req.body;
  if (!year) {
    return res.status(422).json({ error: "need semester year" });
  }
  CoursePlan.findOne({ year: year, term: term })
    .then((existingCoursePlan) => {
      if (existingCoursePlan) {
        return res
          .status(422)
          .json({ error: "this course plan already exists" });
      }
      const coursePlan = new CoursePlan({
        year,
        term,
      });
      coursePlan
        .save()
        .then((course) => {
          res.json({ message: "course plan added" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

router.put("/add-rating", (req, res) => {
  const { name, rating } = req.body;
  Teacher.findOne({ name: name }).then((existingTeacher) => {
    if (existingTeacher) {
      Teacher.updateOne(
        { name: name },
        { ratings: rating },
        function (err, result) {
          if (err) {
            res.send(err);
          } else {
            res.json(result);
          }
        }
      );
    }
  });
  teacher.save();
});

router.put("/add-review", (req, res) => {
  // Note: Assumre the student is alwasy logged in and it's valid
  const {teacherName, review} = req.body;
  
  // using a temporary variable to hold placement of student's name.
  // We need to fix this after implementing login, and use session id linked with student id to locate student
  const studentName = "student1";

  // check if the teacher exist
  Teacher.findOne({ name: teacherName })
  .then((existingTeacher) => {
    if (!existingTeacher) {
      return res
      .status(422).json({ error: "this teach doesn't exist in our system" });
    }
  })

  // check if student already left review for this teacher
  Student.findOne({$and: [{name : studentName}, {reviewsGiven: {$elemMatch: {teacher: teacherName}}}]})
  .then((existingReview) => {
    if(existingReview) {
      return res
        .status(422)
        .json({ error: "You already left review for this teacher" });
    } else {
      // get here, review doesn't exist, we add it to the db
      Student.updateOne(
        {name: studentName}, {$push: {reviewsGiven: {teacher: teacherName, review: review}}}
      ).catch((err) => {
        console.log('Error: ' + err);
      })

      Teacher.updateOne(
        {name: teacherName}, {$push: {reviews: review}}
      ).catch((err) => {
        console.log('Error: ' + err);
      })
    }
  }) 
  .catch((err) => console.log(err));
});
module.exports = router;


  

