const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: false,
  },
  number: Number,
  courseDescription: String,
  teachers: [String],
  semestersOffered: [{ term: String, year: Number }],
  //will prob not use below for now
  reviewsGiven: [{ teacher: String, review: String }],
  ratingsGiven: [{ teacher: String, rating: Number }],
});

mongoose.model("Course", courseSchema);

module.exports = { Course: courseSchema };
