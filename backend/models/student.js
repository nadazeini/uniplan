const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  department:
  {
    type: String,
    required: true,
  },
  reviewsGiven: {
      type: [String]
  },
  rating: {
    type: [Number],
  },
});

mongoose.model("Student", studentSchema);
