const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// initalize the app with express module
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017"); //connect our mongoose to database
    mongoose.set("strictQuery", false);
    app.listen(8080, () => console.log("server started on port:8080"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
////routes///
app.use("/apartment", require("./Controllers/apartment"));
