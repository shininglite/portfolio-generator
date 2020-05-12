const router = require("express").Router();
const repositoriesController = require("../../controllers/repositoriesController");

// Update the repositories by the _id.
router.route("/:id").post(repositoriesController.updateRepositories);

module.exports = router;
