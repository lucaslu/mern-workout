require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workoutsRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5500;
    app.listen(PORT, () => {
      console.log(`connected to db & listening on port ${PORT} 🚀`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
