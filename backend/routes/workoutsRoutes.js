const router = require("express").Router();
const {
  findAll,
  findOne,
  add,
  remove,
  update,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes
router.use(requireAuth);

router.route("/").get(findAll).post(add);

router.route("/:id").get(findOne).delete(remove).patch(update);

module.exports = router;
