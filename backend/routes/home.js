const express = require("express");
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

//Courseplan requests
//get all semesters (include term, year and courses )
router.get("/semesters/:studentid", (req, res) => {
  Student.findOne({ name: req.params.studentid })
    .then((student) => {
      if (!student) {
        return res
          .status("422")
          .json({ error: "student not logged in or doesn't exists" });
      }
      res.json(student["courseplan"]);
    })
    .catch((err) => console.log(err));
});

//add semester (courseplan) request
router.put("/semesters/:id", (req, res) => {
  const { studentAuth, year, term } = req.body; //studentAuth should be unique to student, will modify after authentication
  if (!studentAuth || !year || !term) {
    return res
      .status(422)
      .json({ error: "need student unique id, semester year and term" });
  }
  Student.findOne({ name: studentAuth }) //for now... should be id later
    .then((student) => {
      if (!student) {
        return res.status(422).json({ error: "student doesn't exist" });
      }

      //check if semester was added already
      if (student.courseplan.some(({ id }) => id == req.params.id)) {
        return res.status(422).json({ error: "semester already exists" });
      }

      const newSemester = {
        id: req.params.id,
        term: term,
        year: year,
      };

      student.courseplan.push(newSemester);
      student
        .save()
        .then((updatedStudent) => {
          res.json(updatedStudent["courseplan"]);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

//Remove a semester from courseplan
router.delete("/semesters/:id", (req, res) => {
  const { studentAuth } = req.body; //studentAuth should be unique to student, will modify after authentication
  if (!studentAuth) {
    return res.status(422).json({ error: "need student id" });
  }
  Student.findOneAndUpdate(
    { name: studentAuth },
    { $pull: { courseplan: { id: req.params.id } } },
    { new: true }
  )
    .exec()
    .then((response) => {
      res.json(response["courseplan"]);
    });
});

//Add a course to a semester
router.put("/course/:id", (req, res) => {
  const { studentAuth, id, name } = req.body; //studentAuth should be unique to student, will modify after authentication
  if (!studentAuth) {
    return res
      .status(404)
      .json({ error: "need student unique id, semester year and term" });
  }
  Student.findOne({ name: studentAuth }) //for now... should be id later
    .then((student) => {
      if (!student) {
        return res.status(422).json({ error: "student doesn't exist" });
      }
      //check if course was added already
      if (!student.courseplan.find(({ id }) => id == req.params.id)) {
        return res.status(422).json({ error: "semester doesn't exist" });
      }
      if (
        student.courseplan
          .find(({ id }) => id == req.params.id)
          ["courses"].find(({ id }) => id == req.body.id)
      ) {
        return res.status(422).json({ error: "course already added" });
      }
      const newCourse = {
        id: id,
        name: name,
      };

      student.courseplan
        .find(({ id }) => id == req.params.id)
        ["courses"].push(newCourse);

      student
        .save()
        .then((updatedStudent) => {
          res.json(
            updatedStudent["courseplan"]
              .find(({ id }) => id == req.params.id)
              ["courses"].find(({ id }) => id == req.body.id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
