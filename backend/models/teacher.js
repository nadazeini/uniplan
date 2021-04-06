const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  id: {
  	type: Number,
  	required: true,
  	unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
  	type: [String]
  },
  ratings:{
  	type: [Number],
  },
  classestaught: {
  	type: [String],
  },
  bio: {
  	type: String,
  },
  reviews: {
  	type: [String],
  }

});

mongoose.model("Teacher", teacherSchema);
