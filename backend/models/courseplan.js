const mongoose = require("mongoose");

const coursePlanSchema = new mongoose.Schema({
[{
  year: Number,
  term: String,
  coursesTaken: [{course:String, teacher:String}],
}]
});

mongoose.model("CoursePlan", coursePlanSchema);
