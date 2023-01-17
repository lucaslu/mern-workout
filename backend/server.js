require("dotenv").config();

const express = require("express");
const app = express();

const workoutRoutes = require("./routes/workoutsRoutes");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} 🚀`);
});
