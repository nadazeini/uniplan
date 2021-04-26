const mongoose = require("mongoose");

const coursePlanSchema = new mongoose.Schema([
  {
    id: Number,
    year: Number,
    term: String,
    coursesTaken: [{ courseName: String, teacherName: String }],
  },
]);

mongoose.model("CoursePlan", coursePlanSchema);
