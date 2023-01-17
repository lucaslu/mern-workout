const Workout = require("../models/workoutModel");

// GET all workouts
const findAll = (req, res) => {
  res.json({ mssg: "GET all workouts" });
};

// GET a single workout
const findOne = (req, res) => {
  res.json({ mssg: "GET a single workout" });
};

// POST a new workout
const add = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a workout
const remove = (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
};

// UPDATE a workout
const update = (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
};

module.exports = {
  findAll,
  findOne,
  add,
  remove,
  update,
};
