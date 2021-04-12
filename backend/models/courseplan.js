const mongoose = require("mongoose");

const coursePlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  department:
  {
    type: String,
    required: true,
  },
  number:
  {
    type: Number,
    required: true,
  },
  description: String,
  teachers: [String],
  semestersOffered: [{semester:String, year:Number}],
  reviewsGiven: [{teacher: String, review: String}],
  ratingsGiven:[{teacher: String, review: String}]
});

mongoose.model("CoursePlan", coursePlanSchema);
