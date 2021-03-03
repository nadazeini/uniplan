const e = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.post("/add-teacher", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(422).json({ error: "need name" });
  }
  //search db by name and return
  Teacher.findOne({ name: name })
    .then((existingTeacher) => {
      if (existingTeacher) {
        return res.status(422).json({ error: "already exists" });
      }
      const teacher = new Teacher({
        name,
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
module.exports = router;
