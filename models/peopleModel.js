const mongoose = require("mongoose");

const nestedBiodataSchema = new mongoose.Schema({
  bloodGroup: String,
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
});

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "No address",
  },
  phone: {
    type: Number,
    default: 0,
  },
});

const peopleModel = mongoose.model("people", peopleSchema);

module.exports = peopleModel;
