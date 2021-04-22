const express = require("express");
const { Db } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");
const Student = mongoose.model("Student");
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
  const { id, name } = req.body;
  if (!name || !id) {
    return res.status(422).json({ error: "need course name and id" });
  }
  Course.findOne({ id: id, name: name })
    .then((existingCourse) => {
      if (existingCourse) {
        return res.status(422).json({ error: "this course already exists" });
      }
      const course = new Course({
        id,
        name,
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

router.post("/add-student", (req, res) => {
  const { name, department, courseplan, reviewsGiven, ratingsGiven } = req.body;
  if (!name) {
    return res.status(422).json({ error: "need course name" });
  }
  Student.findOne({
    //need to add id here or something unique
    name: name,
    department: department,
  })
    .then((existingStudent) => {
      if (existingStudent) {
        return res.status(422).json({ error: "student exists" });
      }
      const student = new Student({
        name,
        department,
      });
      student
        .save()
        .then((student) => {
          res.json({ message: "new student added" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

//add semester (courseplan) request
router.post("/add-semester", (req, res) => {
  const { id, year, term, coursesTaken } = req.body;

  if (!year) {
    return res.status(422).json({ error: "need semester year" });
  }
  CoursePlan.findOne({ id: id })
    .then((existingCoursePlan) => {
      if (existingCoursePlan) {
        return res
          .status(422)
          .json({ error: "this course plan already exists" });
      }
      const coursePlan = new CoursePlan({
        id,
        year,
        term,
        coursesTaken,
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
  const {teacherName, review} = req.body;
  // using a temporary variable to hold placement of student's ID.
  // We need to fix this after implementing login
  const studentPlaceholder = 114793; 
  if(!teacherName) {
    return res.status(422).json({ error: "Please enter teacher's name" });
  }
  // if the student already left review for this teacher, prompt error msg
  if(studentPlaceholder.find({"reviewsGiven" : [{teacher : teacherName}]})) {
    return res.status(422).json({ error: "You already left review for this teacher" });
  }
  Teacher.updateOne(
    { $push: {reviews: review} }
  )
  Student.updateOne(
    { $push: {reviewsGiven: {teacher: teacherName, review: review}} }
  )
})
module.exports = router;
