const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
require("./models/teacher");
require("./models/users");

app.use(cors());

app.use(express.json());

app.use(require("./routes/home"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to db: ", err);
});
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
