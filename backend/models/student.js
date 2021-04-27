const mongoose = require("mongoose");
const courseSchema = require("./course");
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
    {
      id: Number,
      term: String,
      year: Number,
      courses: [courseSchema.Course],
    },
  ],
  reviewsGiven: [{ teacher: String, review: String }],
  ratingsGiven: [{ teacher: String, review: String }],
});

mongoose.model("Students", studentSchema);
