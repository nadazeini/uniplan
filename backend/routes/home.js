const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");

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
  const {name, department} = req.body;
  if (!name) {
    return res.status(422).json({ error: "need course name" });
  }
  Course.findOne({ name: name, department: department})
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
  const {year, term} = req.body;
  if (!year) {
    return res.status(422).json({ error: "need semester year" });
  }
  CoursePlan.findOne({ year: year, term: term})
    .then((existingCoursePlan) => {
      if (existingCoursePlan) {
        return res.status(422).json({ error: "this course plan already exists" });
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

module.exports = router;
