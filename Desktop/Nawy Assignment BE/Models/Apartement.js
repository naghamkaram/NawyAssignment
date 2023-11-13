const { string } = require("joi");
const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
  location: {
    type: String,
    // required: true,
  },
  size: {
    type: Number,
    // required: true,
  },
  floorNumber: {
    type: String,
    // required: false,
  },
  isImmediate: {
    type: Boolean,
    // required: true,
    default: false,
  },
});
const Apartment = mongoose.model("Apartment", ApartmentSchema);
// we called the method model from mongoose to create a model in the database
// with the name dog and the properties in the dog schema
module.exports = { Apartment }; //exporting the model or object called dog
