const peopleModel = require("../models/peopleModel");
//CRUD

const createPeople = async (req, res) => {
  try {
    await peopleModel.create(req.body);
    const data = await peopleModel.find();
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

const getPeople = async (req, res) => {
  try {
    const data = await peopleModel.find();
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

const getPeopleById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await peopleModel.findById(id);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

const updatePeople = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    await peopleModel.findByIdAndUpdate(id, { name, age });
    const newData = await peopleModel.findById(id);
    await res.status(200).json({
      message: "success",
      newData,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

const deletePeople = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await peopleModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

module.exports = {
  createPeople,
  getPeople,
  getPeopleById,
  updatePeople,
  deletePeople,
};
