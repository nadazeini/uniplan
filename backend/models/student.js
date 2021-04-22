const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  courseplan: [
    { term: String, year: Number },
    [{ course: String, teacher: String }],
  ],
  reviewsGiven: [{ teacher: String, review: String }],
  ratingsGiven: [{ teacher: String, review: String }],
});

mongoose.model("Student", studentSchema);
