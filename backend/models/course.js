const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department:
  {
    type: String,
    required: true,
  },
  number: Integer,
  courseDescription: String,
  teachers: [String],
  semestersOffered: [{term:String, year:Number}],
  reviewsGiven: [{teacher:String, review: String}],
  ratingsGiven: [{teacher:String, rating: Number}]

});

mongoose.model("Course", courseSchema);
