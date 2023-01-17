// GET all workouts
const findAll = (req, res) => {
  res.json({ mssg: "GET all workouts" });
};

// GET a single workout
const findOne = (req, res) => {
  res.json({ mssg: "GET a single workout" });
};

// POST a new workout
const add = (req, res) => {
  res.json({ mssg: "POST a new workout" });
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
