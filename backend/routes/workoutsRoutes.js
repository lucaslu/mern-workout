const router = require("express").Router();
const workoutsController = require("../controllers/workoutsController");

router.route("/").get(workoutsController.findAll).post(workoutsController.add);

router
  .route("/:id")
  .get(workoutsController.findOne)
  .delete(workoutsController.remove)
  .patch(workoutsController.update);

module.exports = router;
