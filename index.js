// In mongo db, we have:
//Database > Collection > Document

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const peopleRoutes = require("./routes/peopleRoute");

mongoose.connect(
  "mongodb://localhost:27017/peopleDB",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to the DB");
  }
);

app.use(express.json());

app.use("/api/people", peopleRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "404 not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
