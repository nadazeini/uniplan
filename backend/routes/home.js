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
router.put("/add-rating", (req, res) => {
  const {name, rating} = req.body;
  Teacher.findOne({name:name})
  	.then((existingTeacher) => {
  		if (existingTeacher) {
  			Teacher.updateOne({name: name},{ratings: rating}, function(
    	err,
    	result
  		) {
    		if (err) {
      			res.send(err);
    		} else {
      			res.json(result);
    		}
  			});
  		}
  	});
 teacher
 	.save() 

  
});
module.exports = router;
