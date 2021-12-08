const express = require("express");
const router = express.Router();
const {
  createPeople,
  getPeople,
  getPeopleById,
  updatePeople,
  deletePeople,
} = require("../controllers/peopleController");

router.route("/").post(createPeople).get(getPeople);
router.route("/:id").get(getPeopleById).put(updatePeople).delete(deletePeople);

module.exports = router;
